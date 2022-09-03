<script>
    // Portfolio Card
    import PortfolioCard from "../lib/PortfolioCard.svelte";

    // Image
    import Linkess from "../assets/img/project/linkees.webp";
    import Quran from "../assets/img/project/quran.webp";
    import Cosine from "../assets/img/project/cosine.webp";
    import LinkU from "../assets/img/project/linku.webp";
    import Botulis from "../assets/img/project/botulis.webp";
    import Nyumput from "../assets/img/project/nyumput.webp";
    import Take from "../assets/img/project/Take.webp";
    import Template from "../assets/img/project/teknoday-template.webp";
    import Teknoday from "../assets/img/project/teknoday.webp";
    import Aspirasi from "../assets/img/project/aspirasi.webp";
</script>

<!-- Start Portofolio -->
<section class="portofolio py-5">
    <div class="container">
        <div class="row">
            <h1>PROJECT</h1>
        </div>
        <div class="row">
            <div class="col-lg-12">
                <div class="row">
                    <div class="col-lg-6 col-md-12">
                        <PortfolioCard
                            title="Linkees"
                            label="Website"
                            link="https://github.com/suryamsj/Linkees"
                            image={Linkess}
                        />
                    </div>
                    <div class="col-lg-6 col-md-12">
                        <PortfolioCard
                            title="Al-Qur'an Digital"
                            label="Website"
                            link="https://github.com/suryamsj/al-quran-digital"
                            image={Quran}
                        />
                    </div>
                    <div class="col-lg-6 col-md-12">
                        <PortfolioCard
                            title="Cosine Similarity"
                            label="Website"
                            link="https://github.com/suryamsj/Cosine-Similarity"
                            image={Cosine}
                        />
                    </div>
                    <div class="col-lg-6 col-md-12">
                        <PortfolioCard
                            title="Link U"
                            label="Website"
                            link="https://github.com/suryamsj/Link-u"
                            image={LinkU}
                        />
                    </div>
                    <div class="col-lg-6 col-md-12">
                        <PortfolioCard
                            title="Botulis"
                            label="Website"
                            link="https://github.com/suryamsj/Botulis"
                            image={Botulis}
                        />
                    </div>
                    <div class="col-lg-6 col-md-12">
                        <PortfolioCard
                            title="Nyumput"
                            label="Website"
                            link="https://nyumput.suryamsj.my.id/"
                            image={Nyumput}
                        />
                    </div>
                    <div class="col-lg-6 col-md-12">
                        <PortfolioCard
                            title="TAKE"
                            label="Website"
                            link="https://github.com/suryamsj/WDC-2021"
                            image={Take}
                        />
                    </div>
                    <div class="col-lg-6 col-md-12">
                        <PortfolioCard
                            title="Teknoday"
                            label="Website"
                            link="https://github.com/suryamsj/template-teknoday"
                            image={Template}
                        />
                    </div>
                    <div class="col-lg-6 col-md-12">
                        <PortfolioCard
                            title="Teknoday"
                            label="Website"
                            link="https://trilogi.ac.id/teknoday/"
                            image={Teknoday}
                        />
                    </div>
                    <div class="col-lg-6 col-md-12">
                        <PortfolioCard
                            title="Layanan Aspirasi"
                            label="Website"
                            link="https://github.com/suryamsj/layanan-aspirasi"
                            image={Aspirasi}
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<!-- End Portofolio -->
