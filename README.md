
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

### Helpers

You can use them like this:

```php
import { euro, euroThousandPoint, onlyThousandPoint } from './formatters.js';

```

## License

This package is open-source and available under the MIT License.

