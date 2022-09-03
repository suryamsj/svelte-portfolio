<script>
    import Portfolio from "../src/components/Portfolio.svelte";
    import Navbar from "./components/Navbar.svelte";
    import Header from "./components/Header.svelte";
    import Contact from "./components/Contact.svelte";
    import Footer from "./components/Footer.svelte";
</script>

<!-- Start Top Border -->
<div class="top-border" />
<!-- End Top Border -->

<Navbar />

<main class="flex-shrink-0">
    <Header />
    <Portfolio />
    <Contact />
</main>

<Footer />
