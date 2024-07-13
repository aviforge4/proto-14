document.getElementById('addVideoButton').addEventListener('click', function () {
    document.getElementById('videoUploadForm').style.display = 'block';
});

document.getElementById('closeVideoUploadForm').addEventListener('click', function () {
    document.getElementById('videoUploadForm').style.display = 'none';
});

document.addEventListener('DOMContentLoaded', function() {
    const descriptionTextarea = document.querySelector('.form-control.description');

    descriptionTextarea.addEventListener('input', function() {
        // Reset the height to allow shrinking if the content is reduced
        this.style.height = 'auto';
        // Set the height based on the scroll height, but not more than the max-height
        if (this.scrollHeight <= 300) {
            this.style.height = this.scrollHeight + 'px';
        } else {
            this.style.height = '300px';
        }
    });

    var mandatoryFields = [
        document.getElementById('videoTitle'),
        document.getElementById('videoDescription'),
        document.getElementById('videoDateTime')
    ];

    mandatoryFields.forEach(function(field) {
        field.addEventListener('input', function() {
            var uploadButton = document.querySelector('#videoPreviewSection button');
            if (uploadButton) {
                uploadButton.disabled = !areMandatoryFieldsFilled();
            }
        });
    });
});

// Function to handle video file selection
document.getElementById('videoFile').addEventListener('change', function(event) {
    var videoFile = event.target.files[0];
    var videoURL = URL.createObjectURL(videoFile);
    var videoElement = document.getElementById('uploadedVideo');
    videoElement.src = videoURL;
    document.getElementById('videoDisplaySection').style.display = 'block';
    scrollToBottom('videoUploadForm');
});

// Function to handle thumbnail file selection
document.getElementById('thumbnailFile').addEventListener('change', function(event) {
    var thumbnailFile = event.target.files[0];
    var thumbnailURL = URL.createObjectURL(thumbnailFile);
    var thumbnailElement = document.getElementById('chosenThumbnail');
    thumbnailElement.src = thumbnailURL;
    document.getElementById('thumbnailDisplaySection').style.display = 'block';
    scrollToBottom('videoUploadForm');
});

// Function to scroll to the bottom of a given element by id
function scrollToBottom(elementId) {
    var element = document.getElementById(elementId);
    element.scrollTop = element.scrollHeight;
    console.log(`Scrolled to bottom of ${elementId}`);
}
