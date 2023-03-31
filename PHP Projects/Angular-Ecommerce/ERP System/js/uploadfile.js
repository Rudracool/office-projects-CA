


$('#uploadFileContent').on('submit', function (e) {
    e.preventDefault();
    var $form = $(this);

        var file_data = $('#file_upload').prop('files')[0];   
        if(file_data !== undefined){

            var form_data = new FormData();                  
            form_data.append('file_upload', file_data);
            // var Data = file_data.name.split('.').slice(0, -1).join('.');
            function removeExtension(filename) {
                return filename.substring(0, filename.lastIndexOf('.')) || filename;
              }
              form_data.append('filenameWithoutExt',removeExtension(file_data.name))
            // console.log(removeExtension(file_data.name));

            $.ajax({
                url: "uploadfile.php?action=upload",
                type: "POST",
                data: form_data,
                // dataType: 'text',
                processData: false,
                contentType: false,
                success: function (data, textStatus, jqXHR) {
                    
                   if(data){
                      var parsingData=JSON.parse(data);
                        if(parsingData){
                            if(parsingData.success){
                                window.location.reload();
                            }else{

                                $('#err_msg').html(
                                    `<div class="error-msg ">
                                    <p class="append-error-msg">
                                        <i class="fa fa-exclamation-circle" aria-hidden="true"></i> <span >${parsingData.message}</span>
                                    </p>
                                </div>`
                                    );
                                // console.log($('#err_msg'));
                                setTimeout(()=>{
                                    $('#err_msg').html('');
                                },2000)
                                // console.log(false);
                                
                            }
                        }
                    }
                    
                    //cleaning form
                    
                },
                error: function (jqXHR, textStatus, errorThrown) {
                    console.log(jqXHR,'jqXHR');
                    console.log(textStatus,'textStatus');
                    console.log(errorThrown,'errorThrown');
                    
                }
            });
            
        }
});

