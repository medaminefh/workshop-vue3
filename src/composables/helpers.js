import { ref } from "vue";
import axios from "axios";

export function useFetchResource(url) {
  const characters = ref([]);
  const loadingState = ref(null);

  const fetchAllCharacters = () => {
    loadingState.value = "loading";
    axios.get(url).then((response) => {
      setTimeout(() => {
        loadingState.value = "success";
        characters.value = response.data.results;
      }, 1000);
    });
  };

  return {
    data: characters,
    loadingState,
    fetchRessources: fetchAllCharacters,
  };
}
