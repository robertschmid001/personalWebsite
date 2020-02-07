export default {
    methods: {
        hello (a) {
            var b = this.$store.state.a
            console.log(a, b);
        }
    }
};