$(() => {

    $("#addTeacher").click(() => {
        $("#teacherDialog").dialog("open")
    })

    $(".teacherEditButton").click(() => {
        console.log("Painettu")
        $("#teacherEditDialog").dialog("open");
    })

    // Dialog to add new teacher
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
                        location.reload()
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

    $("#teacherEditDialog").dialog({
        autoOpen: false,
        buttons: [
            {
                text: "Tallenna",
                click: () => {
                    //console.log($("#teacherEditName").val());

                    $.ajax({
                        url: "http://localhost:3001/Teachers/" + sessionStorage["id"],
                        method: 'put',
                        data: $("#teacherEditForm").serialize()
                    }).done( (data, status, jqXHR) => {
                        if(jqXHR.status == 204) {
                            alert("Opettajan tietoja muutettu onnistuneesti!:)");

                        } else alert("Jotain meni pieleen :(");

                        location.reload()
                    })
                }
            },
            {
                text: "Peruuta",
                click: () => {
                    $("#teacherEditPriority").val("");
                    $("#teacherEditEmail").val("");
                    $("#teacherEditDialog").dialog("close")
                }
            }
        ]
    })
})