<template>
    <div>
        <div class="text-center">
            <h1 class="teal--text my-3 font-weight-medium">Blog Page</h1>
        </div>
        <v-row>
            <v-col cols="12" sm="6" md="4" v-for="post in posts" :key="post.id">
                <postCard :post="post" />
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
    data() {
        return {
            posts: [],
        };
    },
    asyncData({ $axios, store }) {
        return $axios
            .$get("/posts")
            .then((res) => {
                store.commit("updatePosts", res);
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
