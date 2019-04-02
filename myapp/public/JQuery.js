$(() => {

    $("#addTeacher").click(() => {
        $("#teacherDialog").dialog("open")
    })

    $("#teacherDialog").dialog({
        autoOpen: false,
        buttons: [
            {
                text: "Lisää",
                click: () => {
                    var addons = $("#teacherAddForm").serialize();
                        //console.log(addons)

                        $.post("http://localhost:3001/teachers",
                            addons
                        ).then( (data, status, jqxhr) => {
                            
                        }).fail( (jqxhr, status, error) => {
                            alert("Jotain meni pieleen!")
                            console.log("status= "+status+", error: "+error);
                        })
                }
            },
            {
                text: "Peruuta",
                click: () => {
                    $("#teacherDialog").dialog("close")
                }
            }
        ]
    })
})