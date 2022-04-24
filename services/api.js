export const api = {
  async get(url) {
    try {
      const result = await fetch(url);
      return result.json();
    } catch (e) {
      console.error('Erro ao gerar JSON');
      return {};
    }
  },
};