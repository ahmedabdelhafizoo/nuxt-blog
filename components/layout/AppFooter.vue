<template>
        <v-footer :absolute="!fixed" app>
            <div class="text-center py-2" style="width: 100%">
                Copyright <span>&copy; {{ new Date().getFullYear() }}</span>
            </div>
        </v-footer>
</template>

<script>
export default {
    name: "app-footer",
    data() {
        return {
            fixed: false,
        };
    },
};
</script>