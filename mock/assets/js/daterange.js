var KTApp = function () {

    var createDateRangePickers = function() {
        // Check if jQuery included
        if (typeof jQuery == 'undefined') {
            return;
        }

        // Check if daterangepicker included
        if (typeof $.fn.daterangepicker === 'undefined') {
            return;
        }

        var elements = [].slice.call(document.querySelectorAll('[data-kt-daterangepicker="true"]'));
        var start = moment().subtract(29, 'days');
        var end = moment();
        
        elements.map(function (element) {
            if (element.getAttribute("data-kt-initialized") === "1") {
                return;
            }

            var display = element.querySelector('div');
            var attrOpens  = element.hasAttribute('data-kt-daterangepicker-opens') ? element.getAttribute('data-kt-daterangepicker-opens') : 'left';
            var range = element.getAttribute('data-kt-daterangepicker-range');

            var cb = function(start, end) {
                var current = moment();

                if (display) {
                    if ( current.isSame(start, "day") && current.isSame(end, "day") ) {
                        display.innerHTML = start.format('YYYY/MM/D');
                    } else {
                        display.innerHTML = start.format('YYYY/MM/D') + ' - ' + end.format('YYYY/MM/D');
                    }                    
                }
            }

            if ( range === "today" ) {
                start = moment();
                end = moment();
            }

            $(element).daterangepicker({
                startDate: start,
                endDate: end,
                opens: attrOpens,
                ranges: {
                '今月': [moment().startOf('month'), moment().endOf('month')],
                '先月': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
                }
            }, cb);

            cb(start, end);

            element.setAttribute("data-kt-initialized", "1");
        });
    }


    return {
        init: function () {     

            createDateRangePickers();

            initialized = true;
        },

        hidePageLoading: function () {
            hidePageLoading();
        },

    };
}();
