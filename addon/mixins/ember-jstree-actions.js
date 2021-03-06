import Ember from 'ember';

/**
* Actions that are mapped to jstree and return Ember actions with parameters where necessary.
* These actions are passed to the addon via the actionReceiver property and are generally
* the same as jsTree method names, but camelized.
*
* @class EmberJstreeActions
*/
export default Ember.Mixin.create({
    actions: {
        redraw() {
            // Redraw true currently does not work as intended. Need to investigate.
            this._refreshTree();
        },

        destroy() {
            var treeObject = this.get('treeObject');
            if (!Ember.isNone(treeObject)) {
                if (!Ember.testing && !this.get('_isDestroying')) {
                    treeObject.jstree(true).destroy();
                }

                this.sendAction('eventDidDestroy');
            }
        },

        getNode(nodeId) {
            if (typeof nodeId !== "string") {
                throw new Error('getNode() requires a node ID to be passed to it to return the node!');
            }

            var treeObject = this.get('treeObject');
            if (!Ember.isNone(treeObject)) {
                this.sendAction('actionGetNode', treeObject.jstree(true).get_node(nodeId));
            }
        },

        getText(obj) {
            var treeObject = this.get('treeObject');
            if (!Ember.isNone(treeObject)) {
                this.sendAction('actionGetText', treeObject.jstree(true).get_text(obj));
            }
        },

        getPath(obj, glue, ids) {
            var treeObject = this.get('treeObject');
            if (!Ember.isNone(treeObject)) {
                this.sendAction('actionGetPath', treeObject.jstree(true).get_path(obj, glue, ids));
            }
        },

        getChildrenDom(obj) {
            var treeObject = this.get('treeObject');
            if (!Ember.isNone(treeObject)) {
                this.sendAction('actionGetChildrenDom', treeObject.jstree(true).get_children_dom(obj));
            }
        },

        getContainer() {
            var treeObject = this.get('treeObject');
            if (!Ember.isNone(treeObject)) {
                this.sendAction('actionGetContainer', treeObject.jstree(true).get_container());
            }
        },

        getParent(obj) {
            obj = obj || "#";
            var treeObject = this.get('treeObject');
            if (!Ember.isNone(treeObject)) {
                this.sendAction('actionGetParent', treeObject.jstree(true).get_parent(obj));
            }
        },

        loadNode(obj, cb) {
            var treeObject = this.get('treeObject');
            if (!Ember.isNone(treeObject)) {
                this.sendAction('actionLoadNode', treeObject.jstree(true).load_node(obj, cb));
            }
        },

        loadAll(obj, cb) {
            var treeObject = this.get('treeObject');
            if (!Ember.isNone(treeObject)) {
                this.sendAction('actionLoadAll', treeObject.jstree(true).load_all(obj, cb));
            }
        },

        openNode(obj, cb, animation) {
            var treeObject = this.get('treeObject');
            if (!Ember.isNone(treeObject)) {
                treeObject.jstree(true).open_node(obj, cb, animation);
            }
        },

        openAll(obj, animation) {
            var treeObject = this.get('treeObject');
            if (!Ember.isNone(treeObject)) {
               treeObject.jstree(true).open_all(obj, animation);
            }
        },

        closeNode(obj, cb) {
            var treeObject = this.get('treeObject');
            if (!Ember.isNone(treeObject)) {
               treeObject.jstree(true).close_node(obj, cb);
            }
        },

        closeAll(obj, animation) {
            var treeObject = this.get('treeObject');
            if (!Ember.isNone(treeObject)) {
               treeObject.jstree(true).close_all(obj, animation);
            }
        },

        toggleNode(obj) {
            var treeObject = this.get('treeObject');
            if (!Ember.isNone(treeObject)) {
               treeObject.jstree(true).toggle_node(obj);
            }
        },

        createNode(obj, node, pos, callback, is_loaded) {
            var treeObject = this.get('treeObject');
            if (!Ember.isNone(treeObject)) {
                this.sendAction('actionCreateNode', treeObject.jstree(true).create_node(obj, node, pos, callback, is_loaded));
            }
        },

        renameNode(obj, val) {
            var treeObject = this.get('treeObject');
            if (!Ember.isNone(treeObject)) {
                this.sendAction('actionRenameNode', treeObject.jstree(true).rename_node(obj, val));
            }
        },

        moveNode(obj, par, pos, callback, is_loaded) {
            var treeObject = this.get('treeObject');
            if (!Ember.isNone(treeObject)) {
                treeObject.jstree(true).move_node(obj, par, pos, callback, is_loaded);
            }
        },

        copyNode(obj, par, pos, callback, is_loaded) {
            var treeObject = this.get('treeObject');
            if (!Ember.isNone(treeObject)) {
                treeObject.jstree(true).copy_node(obj, par, pos, callback, is_loaded);
            }
        },

        deleteNode(obj) {
            var treeObject = this.get('treeObject');
            if (!Ember.isNone(treeObject)) {
                this.sendAction('actionDeleteNode', treeObject.jstree(true).delete_node(obj));
            }
        },

        selectNode(obj, suppress_event) {
            var treeObject = this.get('treeObject');
            if (!Ember.isNone(treeObject)) {
                treeObject.jstree(true).select_node(obj, suppress_event);
            }
        },

        deselectNode(obj, suppress_event) {
            var treeObject = this.get('treeObject');
            if (!Ember.isNone(treeObject)) {
                treeObject.jstree(true).deselect_node(obj, suppress_event);
            }
        },

        selectAll(suppress_event) {
            var treeObject = this.get('treeObject');
            if (!Ember.isNone(treeObject)) {
                treeObject.jstree(true).select_all(suppress_event);
            }
        },

        deselectAll(suppress_event) {
            var treeObject = this.get('treeObject');
            if (!Ember.isNone(treeObject)) {
                treeObject.jstree(true).deselect_all(suppress_event);
            }
        },

        lastError() {
            var treeObject = this.get('treeObject');
            if (!Ember.isNone(treeObject)) {
                var e = treeObject.jstree(true).last_error();
                this.set('_lastError', e);
                this.sendAction('actionLastError', e);
            }
        },

        deselectNodes() {
            var treeObject = this.get('treeObject');
            if (!Ember.isNone(treeObject)) {
                treeObject.jstree(true).deselect_all();
            }
        },

        selectNodes(property, values) {
            var treeObject = this.get('treeObject');
            if (null !== treeObject && !this.get('isDestroyed') && !this.get('isDestroying')) {
                var i;
                if ('id' === property) {
                    // If property is ID, can use get_node, which is faster than search.
                    if(Ember.$.isArray(values)) {
                        var nodes = [];
                        for(i=0; i<values.length; i++) {
                            var node = treeObject.jstree(true).get_node(values[i]);
                            nodes.push(node);
                        }
                        treeObject.jstree(true).select_node(nodes, true, true);
                    }
                } else {
                    if(this.plugins.indexOf("search") === -1) {
                         Ember.assert("'search' plugin is required to perform 'selectNodes' on properties other than 'id'");
                         return;
                    }

                    this.set('search_property', property);

                    treeObject.on('search.jstree', function(event, data) {
                        treeObject.jstree(true).select_node(data.nodes, true, true);
                    }.bind(this));

                    if(Ember.$.isArray(values)) {
                        for(i=0; i<values.length; i++) {
                            treeObject.jstree(true).search(values[i]);
                        }

                        treeObject.jstree(true).clear_search();
                    }
                }
            }
        }
    }
});
