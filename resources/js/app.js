import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";
import { createApp, h } from "vue";
import { createInertiaApp } from "@inertiajs/inertia-vue3";

import { InertiaProgress } from "@inertiajs/progress";

import "bootstrap";
// import "../css/scss/custom.scss";
import "bootstrap-icons/font/bootstrap-icons.css";

// import { library } from "@fortawesome/fontawesome-svg-core";
// import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
// import { fas } from "@fortawesome/free-solid-svg-icons";
// library.add(fas);
// import { fab } from "@fortawesome/free-brands-svg-icons";
// library.add(fab);
// import { far } from "@fortawesome/free-regular-svg-icons";
// library.add(far);

createInertiaApp({
    // resolve: (name) => require(`./Pages/${name}`),
    resolve: (name) =>
        resolvePageComponent(
            `./Pages/${name}.vue`,
            import.meta.glob("./Pages/**/*.vue")
        ),
    setup({ el, App, props, plugin }) {
        createApp({ render: () => h(App, props) })
            .use(plugin)
            .mixin({ methods: { route } })
            .mount(el);
    },
});
InertiaProgress.init({ color: "orange" });
