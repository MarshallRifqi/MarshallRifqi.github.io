<template>
  <div class="about">
    <h1>Tentang Kami</h1>
    <p>Ini adalah halaman tentang kami. Kami berdedikasi untuk memberikan layanan terbaik kepada pelanggan kami.</p>
    <p>Kami berkomitmen untuk inovasi dan kepuasan pelanggan, memastikan bahwa setiap interaksi adalah pengalaman yang berharga.</p>
    <button @click="hubungiKami" class="button">Hubungi Kami</button>
  </div>
</template>

<script>
export default {
  methods: {
    hubungiKami() {
      alert('Terima kasih telah menghubungi kami!');
    }
  }
}
</script>

<style scoped>
.about {
  padding: 20px;
  background-color: #f0f0f0;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  transition: all 0.3s ease;
  width: 50%;
  margin: auto;
}

.about:hover {
  box-shadow: 0 4px 8px rgba(0,0,0,0.2);
}

.about h1 {
  color: #333;
  font-size: 24px;
  font-family: 'Arial', sans-serif;
  margin-bottom: 10px;
}

.about p {
  color: #666;
  font-size: 16px;
  line-height: 1.5;
  font-family: 'Verdana', sans-serif;
  margin-left: 5px;
}

.button {
  margin-top: 10px;
  padding: 10px 20px;
  background-color: #007BFF;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease;
}

.button:hover {
  background-color: #0056b3;
}
</style>