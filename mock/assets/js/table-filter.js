/**
 * Reusable Table Filter Module
 * This module provides dropdown-based filtering for DataTables
 */

var TableFilter = (function() {
    'use strict';
    
    /**
     * Initialize a table filter
     * @param {Object} config - Configuration object
     * @param {string} config.tableId - The ID of the table element
     * @param {string} config.filterId - The ID of the filter dropdown element
     * @param {number} config.columnIndex - The index of the column to filter (0-based)
     * @param {string} config.allValue - The value that represents "show all" (default: 'すべて')
     */
    function init(config) {
        // Set defaults
        config.allValue = config.allValue || 'すべて';
        
        // Get the DataTable instance
        var table = $('#' + config.tableId).DataTable();
        
        // Get the filter dropdown
        var filterElement = document.getElementById(config.filterId);
        
        if (!filterElement) {
            console.error('Filter element not found: ' + config.filterId);
            return;
        }
        
        // Add change event listener to the dropdown
        filterElement.addEventListener('change', function() {
            var selectedValue = this.value;
            
            if (selectedValue === config.allValue) {
                // Clear the filter
                table.column(config.columnIndex).search('').draw();
            } else {
                // Apply the filter using exact match
                table.column(config.columnIndex).search('^' + escapeRegExp(selectedValue) + '$', true, false).draw();
            }
        });
        
        // Trigger initial filter if a value is already selected
        if (filterElement.value && filterElement.value !== config.allValue) {
            filterElement.dispatchEvent(new Event('change'));
        }
    }
    
    /**
     * Initialize multiple filters at once
     * @param {Array} configs - Array of configuration objects
     */
    function initMultiple(configs) {
        configs.forEach(function(config) {
            init(config);
        });
    }
    
    /**
     * Escape special regex characters in a string
     * @param {string} string - The string to escape
     * @returns {string} - The escaped string
     */
    function escapeRegExp(string) {
        return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    }
    
    /**
     * Create a filter from data attributes
     * This allows initialization directly from HTML attributes
     * @param {string} elementId - The ID of the filter element
     */
    function initFromElement(elementId) {
        var element = document.getElementById(elementId);
        if (!element) {
            console.error('Element not found: ' + elementId);
            return;
        }
        
        var config = {
            tableId: element.getAttribute('data-table-id'),
            filterId: elementId,
            columnIndex: parseInt(element.getAttribute('data-column-index')),
            allValue: element.getAttribute('data-all-value') || 'すべて'
        };
        
        if (config.tableId && !isNaN(config.columnIndex)) {
            init(config);
        } else {
            console.error('Missing required data attributes for filter: ' + elementId);
        }
    }
    
    /**
     * Auto-initialize all filters with data-table-filter attribute
     */
    function autoInit() {
        document.querySelectorAll('[data-table-filter="true"]').forEach(function(element) {
            if (element.id) {
                initFromElement(element.id);
            }
        });
    }
    
    // Public API
    return {
        init: init,
        initMultiple: initMultiple,
        initFromElement: initFromElement,
        autoInit: autoInit
    };
})();

// Auto-initialize when DOM is ready
if (typeof jQuery !== 'undefined') {
    $(document).ready(function() {
        TableFilter.autoInit();
    });
}