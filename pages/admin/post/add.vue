<template>
    <PostForm formTitle="Add New Post">
        <template v-slot="{ formData }">
            <v-btn
                dark
                block
                large
                color="teal"
                class="mt-4"
                :loading="addPostLoading"
                @click="addNewPost(formData)"
                >Add Post</v-btn
            >
        </template>
    </PostForm>
</template>

<script>
import PostForm from "@/components/admin/PostForm.vue";
export default {
    name: "add-post-form",
    components: {
        PostForm,
    },
    data() {
        return {
            addPostLoading: false,
        };
    },
    methods: {
        addNewPost(getPostData) {
            let newPost = getPostData();
            if (newPost) {
                this.addPostLoading = true;
                this.$axios
                    .post("/posts", newPost)
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