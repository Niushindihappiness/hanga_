<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title> 
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
<link rel="stylesheet" href="./style.css">
</head>
<body><div class="container mt-5">
    <h2>Add Post</h2>
    <form id="postForm">
        <div class="mb-3">
            <label for="id" class="form-label">Id:</label>
            <input type="text" class="form-control" id="id">
        </div>
        <div class="mb-3">
            <label for="title" class="form-label">Title:</label>
            <input type="text" class="form-control" id="title">
        </div>
        <div class="mb-3">
            <label for="description" class="form-label">Description:</label>
            <input type="text" class="form-control" id="description">
        </div>
        <button type="button" class="btn btn-primary" id="button">Add Post</button>
    </form>

    <!-- Display the posts here -->
    <div id="display" class="row" style="width: 100%;"></div>
</div>

<script src="./js/script.js">
  </script>

<script src="./js/script.js">
</script>
<script src="../js/script.js">
</script>
 <script src="edit.js">

 </script>
</body>
</html>