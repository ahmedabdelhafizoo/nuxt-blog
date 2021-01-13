<template>
    <v-form v-model="valid" @submit="sendFormData" ref="form">
        <v-container class="px-0">
            <div class="col-sm-8 col-lg-6 px-0 mx-auto">
                <v-btn
                    dark
                    text
                    class="px-0 mb-3"
                    color="teal"
                    @click="$router.go(-1)"
                >
                    <v-icon class="mr-2">{{ "mdi-arrow-left-bold" }}</v-icon>
                    Back
                </v-btn>
                <v-card class="col px-4">
                    <h3 class="teal--text font-weight-medium mb-3" v-if="formTitle">
                        {{ formTitle }}
                    </h3>
                    <v-text-field
                        class="mb-5"
                        v-model="formData.title"
                        :rules="formRules.postTitle"
                        label="Post Title"
                    ></v-text-field>

                    <v-textarea
                        class="mb-5"
                        v-model="formData.body"
                        :rules="formRules.postBody"
                        label="Post description"
                    ></v-textarea>

                    <slot :formData="sendFormData"></slot>
                </v-card>
            </div>
        </v-container>
    </v-form>
</template>

<script>
export default {
    name: "post-form",
    props: ['formTitle', 'currentPostData'],
    data: () => ({
        valid: false,
        formRules: {
            postTitle: [
                (v) => !!v || "post Title is required",
                (v) =>
                    v.length >= 10 ||
                    "post Title must be at least 10 characters",
            ],
            postBody: [
                (v) => !!v || "post Desciption is required",
                (v) =>
                    v.length >= 50 ||
                    "post Desciption must be at least 50 characters",
            ],
        },
    }),
    computed: {
        formData() {
            return this.currentPostData ? {...this.currentPostData} : {title: '', body: ''};
        }
    },
    methods: {
        sendFormData() {
            this.$refs.form.validate();
            if(this.valid) {
                // console.log(this.formData);
                return this.formData;
            }
        }
    }
};
</script>