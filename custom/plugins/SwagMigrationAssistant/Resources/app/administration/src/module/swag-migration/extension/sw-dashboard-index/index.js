import template from './sw-dashboard-index.html.twig';

const { Component } = Shopware;
const { Criteria } = Shopware.Data;

Component.override('sw-dashboard-index', {
    template,

    inject: {
        repositoryFactory: 'repositoryFactory'
    },

    data() {
        return {
            context: Shopware.Context.api,
            runExists: false,
            loading: true,
            run: {}
        };
    },

    computed: {
        migrationRunRepository() {
            return this.repositoryFactory.create('swag_migration_run');
        }
    },

    created() {
        this.createdComponent();
    },

    methods: {
        createdComponent() {
            return this.migrationRunRepository.search(new Criteria(), this.context).then((items) => {
                this.runExists = items.length > 0;

                if (this.runExists) {
                    this.run = items[0];
                }

                this.loading = false;
            });
        }
    }
});
