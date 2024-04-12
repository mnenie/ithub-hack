<template>
    <h1 class="dashboard-title">Dashboard</h1>
    <div class="box">
    <div class="buttons-container">
        <button>Overview</button>
        <button>Analytics</button>
        <button>Reports</button>
        <button>Notifications</button>
    </div>
    </div>
</template>
  
<style scoped>

.dashboard-title {
    font-weight: bold;
    font-size: 24px;
    color: black;
    margin-top: 50px;
}
  
.box {
    background-color: #f0f0f0;
    border: none;
    margin-top: 20px;
    text-align: center;
    max-width: fit-content;
    border-radius: 10px;
}
  
.buttons-container {
    display: flex;
    justify-content: center;
    margin-top: 20px;
}
  
.box button {
    padding: 5px;
    background-color: transparent;
    color: #858585;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    margin: 5px;
    transition: all 0.3s ease;
}
  
.box button:hover {
    background-color: white;
    color: black;
}

</style>
  
  
  
  
  
  
  