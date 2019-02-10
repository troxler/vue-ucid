let ucid = 0;

export default {
    beforeCreate() {
        this.ucid = ucid.toString();
        ucid++;
    },
};
