<template>
    <v-app-bar fixed app color="white">
        <v-toolbar-title v-text="title" />
        <v-spacer />

        <v-list flat class="d-flex py-0">
            <v-list-item
                v-for="(item, i) in items"
                :key="i"
                :to="item.to"
                router
                exact
                color="teal"
            >
                <v-icon class="mr-2">{{ item.icon }}</v-icon>
                <v-list-item-content>
                    <v-list-item-title v-text="item.title" />
                </v-list-item-content>
            </v-list-item>
        </v-list>
    </v-app-bar>
</template>

<script>
export default {
    name: "app-header",
    data() {
        return {
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
    }
};
</script>