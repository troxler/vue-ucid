# ucid - Unique Component ID

ucid is a Vue.js [mixin](https://vuejs.org/v2/guide/mixins.html) that adds a unique ID to some of your components.
Unique identifiers are required for [labels](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label), [ARIA](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA) and other things.
ucid is based on [this issue](https://github.com/vuejs/vue/issues/5886).


## Usage

Install it:

    npm i ucid
    
Then add it to your component(s) that need(s) a unique ID.
`ucid` is *identical* within one component and *unique* over all other components (including siblings and child components).

    <template>
        <!-- example usage -->
        <div :id="'test-' + ucid">{{ucid}}</div>
    </template>
    
    <script>
        import ucid from 'ucid';
    
        export default {
            mixins: [
                ucid,
            ],
            mounted() {
                // example usage
                console.log('ID:', this.ucid);
            },
        };
    </script>


## How it works

ucid is a Vue.js mixin.
Every component, that extends its own functionality with ucid will get a local property called `ucid`.
It is defined within the [`beforeCreate`](https://vuejs.org/v2/api/#beforeCreate) hook (see [lifecycle diagram](https://vuejs.org/v2/guide/instance.html#Lifecycle-Diagram)) of ucid.



## FAQ

### Why not just use `_uid`?

[Because](https://github.com/vuejs/vue/issues/5886#issuecomment-308625735):

> The vm `_uid` is reserved for internal use and it's important to keep it private (and not rely on it in user code) so that we keep the flexibility to change its behavior for potential future use cases.

### Why is it called `ucid`, not `$ucid`?

The `$` prefix is a convention of [instance properties](https://vuejs.org/v2/cookbook/adding-instance-properties.html).

> `$` is a convention Vue uses for properties that are available to all instances.

`ucid` is not available to all instances.
It is just a mixin that extends functionality of *some* components that you choose. 
