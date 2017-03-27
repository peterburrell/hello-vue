<template>
    <div>
        <h1>Products</h1>

        <p>Choose some products and add them to your cart.</p>

        <table v-if="products.length" class="table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Price</th>
                    <th>Add</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="product in products">
                    <td>{{ product.name }}</td>
                    <td>{{ product.description }}</td>
                    <td>{{ product.price }}</td>
                    <td><a href="#" @click.prevent="addToCart(product)">Add</a></td>
                </tr>
            </tbody>
        </table>

        <p v-else><em>Loading...</em></p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            products: []
        };
    },
    
    methods: {
        addToCart(product) {
            console.log('added', product);
        }
    },

    mounted() {
        fetch('/api/products')
            .then(response => response.json())
            .then(data => {
                this.products = data;
            });
    }
}
</script>
