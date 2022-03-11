import "./Infrastructure.scss";

const Infrastructure = () => {
    return (
        <div class="container" id="parcInformatique">
            <div class='section-admin'>
                <div class='outer-block my-16'>
                    <div class="outer-block-header">
                        <div class="outer-block-title"><h2>Parc Informatique des Établissements Scolaire</h2></div>
                    </div>
                    <div class='outer-block-body'>
                        <div class="w-full flex justify-center items-center mb-3">
                            <form class="h-10 w-1/2 mr-2 flex justify-between" action="#result">
                            <input class="w-full mr-0" name="search" type="text" placeholder="Commencez à taper pour rechercher des établissements ..." aria-label="Search" value="<?php if(isset($_GET['search'])){ echo $_GET['search']; } ?>" required/>
                            <button class="w-1/12 btn btn-primary px-4" title="search" name="filter" type="submit">
                                <i class="fas fa-search"></i>
                            </button>
                            </form>
                            <form class="h-10 w-1/2 flex justify-between" action="#result">
                            <select class="w-full form-select mr-0" name="typeEtablissement">
                                <option value="all" selected>Tous Établissements</option>
                                <option value="lycee">
                                    Lyceés
                                </option>
                                <option value="colleges">
                                    Collèges
                                </option>
                                <option value="primaires">
                                    Écoles Primaires
                                </option>
                                <option value="g-scolaire">
                                    Groupe Scolaire
                                </option>
                                <option value="unite">
                                    Unité Scolaire
                                </option>
                            </select>
                            <button class="w-1/12 btn btn-primary px-4" name="filter" title="filter" type="submit">
                                <i class="fas fa-sliders-h"></i>
                            </button>
                            </form>
                            <form class="h-10 flex justify-between" action="#result">
                                <input type="hidden" name="filter" />
                                <button class="btn btn-primary px-4 mx-1" name="filterUp" title="filter" type="submit">
                                    <i class="fas fa-arrow-circle-up"></i>
                                </button>
                            </form>
                            <form class="h-10 flex justify-between" action="#result">
                                <input type="hidden" name="filter" />
                                <button class="btn btn-primary px-4" name="filterDown" title="filter" type="submit">
                                    <i class="fas fa-arrow-circle-down"></i>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Infrastructure;