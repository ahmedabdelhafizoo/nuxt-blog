<template>
    <v-card style="height: 100%" class="d-flex flex-column">
        <!-- <img
            src="https://unsplash.it/800/400"
            alt="post image"
            height="300px"
            style="object-fit: cover"
        /> -->
        <v-card-title class="headline">
            {{ post.title }}
        </v-card-title>
        <v-card-text class="pb-2">
            <p class="mb-0 post-text" v-if="isSinglePost">
                {{ post.body }}
            </p>
            <p class="mb-0" v-else>
                {{ post.body.substring(0, 100) + " ..." }}
            </p>
        </v-card-text>
        <v-card-actions class="mt-auto mx-2 mb-2">
            <template v-if="isAdmin && !isSinglePost">
                <v-btn dark text color="teal" nuxt :to="`/admin/post/${post.id}/edit`">
                    Edit
                </v-btn>

                <confirmModal
                    buttonText="Delete"
                    :buttonAttrbutes="{
                        text: true,
                        color: 'error',
                        dark: true,
                    }"
                >
                    <template v-slot="{ closeModal }">
                        <v-card class="pt-5">
                            <h3 class="font-weight-regular px-4 mb-3">
                                Are You Sure you want to delete this post ?
                            </h3>
                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn
                                    color="black darken-1"
                                    text
                                    @click="closeModal"
                                    :disabled="deletePostLoading"
                                >
                                    Cancel
                                </v-btn>
                                <v-btn color="red" text @click="DeletePost(post.id, closeModal)" :loading="deletePostLoading"> Delete </v-btn>
                            </v-card-actions>
                        </v-card>
                    </template>
                </confirmModal>
            </template>

            <template v-else>
                <v-btn
                    dark
                    text
                    color="teal"
                    nuxt
                    :to="`/post/${post.id}`"
                    v-if="!isSinglePost"
                >
                    Read More
                </v-btn>
            </template>
        </v-card-actions>
    </v-card>
</template>

<script>
import confirmModal from "~/components/shared/confirmModal.vue";
export default {
    name: "post-card",
    components: {
        confirmModal,
    },
    props: {
        post: {
            required: true,
            type: Object,
        },
        isAdmin: {
            required: false,
            type: Boolean,
        },
        isSinglePost: {
            required: false,
            type: Boolean,
        },
    },
    data() {
        return {
            deletePostLoading: false,
        };
    },
    methods: {
        DeletePost(postId, callback){
            this.deletePostLoading = true;
            this.$axios.$delete(`/posts/${postId}`).then(res => {
                this.deletePostLoading = false;
                callback();
                this.$eventBus.$emit("post-deleted");
            }).catch(err => {
                console.log(err);
            })
        }
    }
};
</script>