import { Model } from '@stackbit/types';

export const FormSection: Model = {
    type: 'object',
    name: 'CardsSection',
    label: 'Forms',
    labelField: 'title',
    thumbnail: 'https://assets.stackbit.com/components/models/thumbnails/default.png',
    groups: ['sectionComponent'],
    fields: [
        { type: 'string', name: 'title', label: 'Title', default: 'Featured Items' },
        { type: 'string', name: 'subtitle', label: 'Subtitle', default: 'The section subtitle' },
        {
            type: 'list',
            name: 'items',
            label: 'Items',
            items: { type: 'model', models: ['Form'] },
            default: [
                {
                    type: 'Form',
                    title: 'Share Your Memory',
                    actions: [{ type: 'Button', label: 'Learn More', url: '/' }]
                }
            ]
        }
    ]
};
