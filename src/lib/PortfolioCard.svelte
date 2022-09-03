<script>
    import { onMount } from "svelte";
    export let title, label, image, link;

    onMount(() => {
        const figurePorto = document.querySelectorAll(".snip1033");
        figurePorto.forEach((figure, i) => {
            // Random Background Change
            var colors = [
                "#D1CCEB",
                "#EBCCCC",
                "#EBDDCC",
                "#D3EBCC",
                "#CCEBE8",
                "#CCD5EB",
                "#E3CCEB",
                "#EBCCE4",
            ];
            var new_color = colors[Math.floor(Math.random() * colors.length)];
            figurePorto[i].style.background = new_color;

            // AOS Animate
            figure.dataset.aos = "zoom-in";
            figure.dataset.aosDelay = i * 100;
        });
    });
</script>

<a href={link} target="_blank" rel="noopener">
    <figure class="snip1033">
        <img id="project-image" src={image} alt={title} />
        <div class="center">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                class="bi bi-link"
                viewBox="0 0 16 16"
            >
                <path
                    d="M6.354 5.5H4a3 3 0 0 0 0 6h3a3 3 0 0 0 2.83-4H9c-.086 0-.17.01-.25.031A2 2 0 0 1 7 10.5H4a2 2 0 1 1 0-4h1.535c.218-.376.495-.714.82-1z"
                />
                <path
                    d="M9 5.5a3 3 0 0 0-2.83 4h1.098A2 2 0 0 1 9 6.5h3a2 2 0 1 1 0 4h-1.535a4.02 4.02 0 0 1-.82 1H12a3 3 0 1 0 0-6H9z"
                />
            </svg>
        </div>
        <figcaption>
            <div class="left">
                <h2>{title}</h2>
            </div>
            <div class="right">
                <h2 class="label">{label}</h2>
            </div>
        </figcaption>
    </figure>
</a>
