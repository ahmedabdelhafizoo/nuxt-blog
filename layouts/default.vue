<template>
    <v-app>
        <AppHeader />
        <v-main>
            <v-container class="mb-5">
                <nuxt />
            </v-container>
        </v-main>
        <AppFooter />

        <!-- axios loading -->
        <!-- <div class="app-loader" v-if="axiosLoadingStatus">
            <v-progress-circular
                :size="40"
                color="teal"
                indeterminate
            ></v-progress-circular>
        </div> -->
        <!-- end axios loading -->
    </v-app>
</template>

<script>
import AppHeader from "@/components/layout/AppHeader.vue";
import AppFooter from "@/components/layout/AppFooter.vue";
export default {
    components: {
        AppHeader,
        AppFooter,
    },
    computed: {
        axiosLoadingStatus() {
            return this.$store.getters.getAxiosLoadingStatus;
        },
    },
    data() {
        return {
            fixed: false,
            items: [
                {
                    icon: "mdi-home",
                    title: "BLOG",
                    to: "/",
                },
                {
                    icon: "mdi-account",
                    title: "Admin",
                    to: "/admin",
                },
            ],
            title: "BLOG",
        };
    },
};
</script>

<style lang="scss">
.app-loader {
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(#000, .25);
    position: fixed;
    top: 5px;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 99;
}
</style>
