document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('addPostButton').addEventListener('click', function () {
        document.getElementById('postUploadForm').style.display = 'block';
    });

    document.getElementById('closePostUploadForm').addEventListener('click', function () {
        document.getElementById('postUploadForm').style.display = 'none';
    });
});
