<template>
    <div>
        <div class="text-center">
            <h1 class="teal--text my-3 font-weight-medium">Admin Page</h1>
        </div>
        <v-btn class="mb-3" dark color="teal" nuxt to="/admin/post/add"
            ><v-icon class="mr-2">mdi-plus-circle</v-icon> Add Post</v-btn
        >
        <v-row>
            <v-col cols="12" sm="6" md="4" v-for="post in posts" :key="post.id">
                <postCard :post="post" :isAdmin="true" />
            </v-col>
        </v-row>
    </div>
</template>


<script>
import postCard from "@/components/blog/PostCard.vue";
export default {
    name: "blog-page",
    components: {
        postCard,
    },
    mounted() {
        this.$eventBus.$off();
        this.$eventBus.$on("post-deleted", () => {
            this.$axios
                .$get("/posts")
                .then((res) => {
                    this.posts = res;
                    this.$toasted.show("Post Deleted Successfully", {
                        iconPack: "mdi",
                        theme: "toasted-primary",
                        type: "success",
                        position: "bottom-center",
                        icon: "check-circle",
                        duration: 4000,
                    });
                })
                .catch((err) => {
                    console.log(err);
                });
        });
    },
    data() {
        return {
            posts: [],
        };
    },
    asyncData({ $axios }) {
        return $axios
            .$get("/posts")
            .then((res) => {
                return {
                    posts: res,
                };
            })
            .catch((err) => {
                console.log(err);
            });
    },
};
</script>
