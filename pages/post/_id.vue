<template>
    <div>
        <div class="col-lg-10 mx-auto mt-4" style="padding: 0">
            <v-btn dark text class="px-0 mb-4" color="teal" nuxt to="/">
                <v-icon class="mr-2">{{ "mdi-arrow-left-bold" }}</v-icon> Back
                To Home
            </v-btn>
            <postCard :post="post" :isSinglePost="true" />
        </div>
    </div>
</template>


<script>
import postCard from "@/components/blog/PostCard.vue";
export default {
    data() {
        return {
            post: {},
        };
    },
    components: {
        postCard,
    },
    validate({ params }) {
        console.log(params.id);
        return !isNaN(Number(params.id));
    },
    head() {
        return {
            title: this.post.title,
            meta: [
                {
                    hid: "description",
                    name: "description",
                    content: this.post.body,
                },
            ],
        };
    },
    asyncData({ $axios, params }) {
        return $axios
            .$get(`/posts/${params.id}`)
            .then((res) => {
                console.log(res);
                return {
                    post: res,
                };
            })
            .catch((err) => {
                console.log(err);
            });
    },
};
</script>

<style lang="scss">
    .post-text {
        font-size: 18px;
        line-height: 1.7;
    }
</style>