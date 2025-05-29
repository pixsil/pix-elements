
# Vue Components Package for Laravel

Just a combined package for some different vue components


## Features

- **Vue.js 3 & Bootstrap 5 Support**
- **Tailwind CSS Version Available**
- **Seamless Laravel Integration**

## Installation

To install the package, use the following command:

```bash
npm install pix-elements
```

## Usage

In vue:

```bash
    import {PixButton} from "pix-elements";
```

```bash
    components: {
        PixButton,
    },
```


### Pix data table

*Insert data*

You can create an array with all the data you have. You can use keys deeper in the array like the second example.

Use can set custom td and th classes with tdClass and thClass.

table_fields: [
    {
        key: 'article_number',
        label: 'Artikelnummer',
    },
    {
        key: 'product_type.name',
        label: 'Type\n',
    },
    {
        key: 'buttons',
        tdClass: 'fit',
        thClass: 'fit',
    },
],


*Custom th and td*

```html
<pix-data-table-card @onSearch="onSearch" :items="product_templates" :fields="table_fields" @on-pagination-change="onPaginationChange" @enter-on-search-input="onEnterOnSearch">
    <template #head(buttons)="data">
        <div class="float-right">
            <b-button variant="outline-primary" size="sm" @click="selectProduct(data.item)" title="selecteer">
                <i class="fa-solid fa-arrow-right"></i>
            </b-button>
        </div>
    </template>
    <template #cell(buttons)="data">
        <div class="float-right">
            <b-button variant="outline-primary" size="sm" @click="selectProduct(data.item)" title="selecteer">
                <i class="fa-solid fa-arrow-right"></i>
            </b-button>
        </div>
    </template>
</pix-data-table-card>
```

Here is "buttons" the field name. This can be used for the cells and the header of the table

### Pix modal

For the modal, you need to add the <PixModalInjector> somewhere in your code — for example, all the way at the bottom of your application template. This injector is used for all the modals. The placement does not matter.

Somewhere in the code where you want to trigger a modal component, you can use the <PixModalTrigger>. Inside it, you can add a link or a button. You need to add the parameter component="The imported component".

The imported component will be sent to the modal injector and rendered there. You can pass attributes to the <PixModalTrigger>, and they will be sent to your modal component — just define them as props. It is even possible to use v-model.

#### Requirements
The modal uses an eventBus that is provided via injection. Make sure you have this installed.




### Helpers

You can use them like this:

```php
import { euro, euroThousandPoint, onlyThousandPoint } from './formatters.js';

```

## License

This package is open-source and available under the MIT License.

