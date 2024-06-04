<template>
    <div class="grid w-full h-screen max-w-sm mx-auto place-items-center">
        <form class="w-full px-8 py-8 shadow-md bg-background-default text-text-default">
            <h1 class="mb-8 text-2xl font-bold text-center text-primary-default">Login</h1>
            <div class="mb-5">
                <label for="email" class="block mb-2 text-sm font-medium text-primary-default">Email</label>
                <input type="email" name="email" id="email" class="block w-full text-sm border outline-none border-slate-800 bg-gray-50 focus:border-primary-default p-2.5 rounded-lg">
            </div>
            <div class="mb-10">
                <label for="password" class="block mb-2 text-sm font-medium text-primary-default">Password</label>
                <input type="password" name="password" id="password" class=" block w-full text-sm border outline-none border-slate-800 bg-gray-50 focus:border-primary-default p-2.5 rounded-lg">
            </div>
            <div class="text-center">
                <button type="submit" class="text-sm font-medium text-white bg-primary-default py-2.5 px-5 rounded-lg text-center">Submit</button>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    name: 'Login',
    setup() {
                
    }
}
</script>
