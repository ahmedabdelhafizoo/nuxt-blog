<template>
    <PostForm formTitle="Edit Post" :currentPostData="postData">
        <template v-slot="{ formData }">
            <v-btn
                block
                large
                :dark="postData ? true : false"
                color="teal"
                class="mt-4"
                :loading="addPostLoading"
                :disabled="postData ? false : true"
                @click="editPost(formData)"
                >Edit Post</v-btn
            >
        </template>
    </PostForm>
</template>

<script>
import PostForm from "@/components/admin/PostForm.vue";
export default {
    name: "edit-post-form",
    components: {
        PostForm,
    },
    data() {
        return {
            addPostLoading: false,
            postData: null,
        };
    },
    asyncData({ $axios, params }) {
        return $axios
            .get(`/posts/${params.id}`)
            .then((res) => {
                return { postData: res.data };
            })
            .catch((err) => {
                console.log(err);
            });
    },
    methods: {
        editPost(getPostData) {
            let newPost = getPostData();
            if (newPost) {
                this.addPostLoading = true;
                this.$axios
                    .put(`/posts/${this.$route.params.id}`, newPost)
                    .then(() => {
                        this.$router.push("/admin");
                        this.$toasted.show("Post Added Successfully", {
                            iconPack: "mdi",
                            theme: "toasted-primary",
                            type: "success",
                            position: "bottom-center",
                            icon: "check-circle",
                            duration: 4000,
                        });
                    })
                    .catch((err) => console.log(err))
                    .finally(() => {
                        this.addPostLoading = false;
                    });
                console.log(newPost);
            }
        },
    },
};
</script>