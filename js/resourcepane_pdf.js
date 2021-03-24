function add_pdf_resource_body(tab_id) { //Load a pdf file into the resource pane in the form of viewer.html using an iframe
    var tab_body = $(`
        <div id="` + tab_id + `_body" class="resource_pane_tab_content">
                <div class="pdf-form-group">
                        <button type="button" class="btn btn-default" onclick="remove_tab_pdf()" title="Remove this tab from the resource pane">
                            <i class="fa fa-trash fa-fw fa-lg"></i>
                        </button>
                        <!-- Monkeypuzzle button-->
                        <button id="add-pdf-node" class="btn btn-default" title="Add a node from text selection">
                          <i class="fa fa-puzzle-piece fa-fw fa-lg"></i>
                        </button>
                        </div>
                        <div class="pdf-area">
						<!-- The file which is opened and displayed within the specified canvas size (height and width). -->
                        <iframe id="pdf-js-viewer" src="web/viewer.html" title="webviewer" name="my_iframe" frameborder="0" width="100%" height="900"></iframe>
                        <!-- Javascript to listen for highlighted text within the pdf, and make a new text atom when monkeypuzzle button is clicked-->
                        <script>
                        var button = document.getElementById("add-pdf-node");
                        button.addEventListener("click", () => { // Monkeypuzzle button clicked
                            // Inform the iframe that button was clicked and we need user selected text if there is any
                            my_iframe.postMessage("message", "*");
                        });
                        // Get selected text from within the iframe and create a new atom
                        window.addEventListener("message", function(event) {
                            add_new_atom_node(event.data);
                        });                     
                        </script>
                     </div>
                </div>
        </div>
    `);
    $(".tab_body").append(tab_body);
}

function change_title(tab_id) {
    var title = document.getElementById("title_" + tab_id).value;
    set_text_resource_title(tab_id, title)
}

function toggle_edit_lock() {
    if (document.getElementById(current_tab).hasAttribute('readonly')) {
        document.getElementById(current_tab).removeAttribute('readonly');
        document.getElementById('toggle_edit_lock_icon_' + current_tab).classList.toggle('fa-lock');
        document.getElementById('toggle_edit_lock_icon_' + current_tab).classList.toggle('fa-unlock');
    }
    else {
        document.getElementById(current_tab).setAttribute('readonly', 'readonly');
        document.getElementById('toggle_edit_lock_icon_' + current_tab).classList.toggle('fa-unlock');
        document.getElementById('toggle_edit_lock_icon_' + current_tab).classList.toggle('fa-lock');
    }
}