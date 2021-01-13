<template>
    <v-dialog v-model="dialog" persistent max-width="400">
        <template v-slot:activator="{ on, attrs }" v-if="buttonText">
            <v-btn v-on="on" v-bind="{ ...attrs, ...buttonAttrbutes }">
                {{ buttonText }}
            </v-btn>
        </template>

        <slot :closeModal="closeModal"></slot>
    </v-dialog>
</template>
<script>
export default {
    name: "confirm-modal",
    props: {
        buttonText: {
            type: String,
        },
        buttonAttrbutes: {
            type: Object,
            default: { color: "primary" },
        },
    },
    data() {
        return {
            dialog: false,
        };
    },
    methods: {
        closeModal() {
            this.dialog = false;
        }
    }
};
</script>