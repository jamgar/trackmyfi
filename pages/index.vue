<template>
  <section class="container">
    <div>
      <h1 class="title">Track My Fi</h1>
      <h2 class="subtitle">Track Income and Expenses</h2>
      <p class="content">
        Starting a budget is not alway easy, but you will want to begin by
        tracking your finances. Track My Fi was built to do just that. By
        tracking your what comes in and what goes out you will have a baseline
        to start from.
      </p>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 85vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}
.content {
  text-align: center;
  color: #526488;
  padding: 0 4rem;
  font-size: 1.5rem;
}
</style>
