$(function () {
    $("textarea").each(function(){
        this.rows = this.value.split("\n").length
    })
    $(".dob-answer-btn").click(function () {
        $(this).html($(this).html() == "Hide" ? "Answer" : "Hide").next(".dob-answer").toggle()
    })
    $(".dob-run-btn").click(function () {
        var $this = $(this), $code, $output
        if ($this.prev().is(".output")) {
            $output = $this.prev()
            $code = $output.prev().find("textarea")
            $output.removeClass().addClass("output bs-callout").html("<img src='/assets/compiling.gif' />")
        } else {
            $code = $this.prev().find("textarea")
            $this.before("<div class='output bs-callout'><img src='/assets/compiling.gif' /></div>")
            $output = $this.prev()
        }
        $.ajax({
            type: "POST",
            headers: {
                "x-requested-with": location.host
            },
            dataType: "json",
            data: { body: $code.val() },
            url: "https://cors-anywhere.herokuapp.com/https://play.golang.org/compile",
            success: function (data) {
                var output, cls
                if(data.compile_errors){
                    output = data.compile_errors
                    cls = "bs-callout-danger"
                }else if(data.Errors){
                    output = data.Errors
                    cls = "bs-callout-warning"
                }else{
                    if(data.output){
                        output = data.output
                    }else {
                        output = $.map(data.Events,e=>e.Message).join("<br/>")
                    }
                    cls = "bs-callout-info"
                }
                $output.addClass(cls).html(output.replace(/\n/g, "<br/>"))
            }
        });
    })
})
