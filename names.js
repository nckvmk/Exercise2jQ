
$(document).ready(function() {
   
    // Select all the data rows (excluding the header row)
    const $rows = $('#directory-table tbody tr');
    
    // Track the currently highlighted row index (-1 means none highlighted)
    let currentIndex = -1;

    // --- Next Button Logic ---
    $('#next-btn').on('click', function() {
        // If a row is currently highlighted, set its color back to black
        if (currentIndex >= 0) {
            $rows.eq(currentIndex).css('color', 'black');
        }

        // Move to the next index. Modulo creates a perfect cycle.
        currentIndex = (currentIndex + 1) % $rows.length;

        // Highlight the new row in red
        $rows.eq(currentIndex).css('color', 'red');
    });

    // --- Clear Button Logic ---
    $('#clear-btn').on('click', function() {
        // Reset all rows to black
        $rows.css('color', 'black');
        // Reset tracker to initial state
        currentIndex = -1;
    });

});