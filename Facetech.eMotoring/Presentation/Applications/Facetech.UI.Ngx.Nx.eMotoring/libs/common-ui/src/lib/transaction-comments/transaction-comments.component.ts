import { Component, OnInit, ViewChild, ElementRef, Renderer, Directive, Input, Renderer2 } from '@angular/core';
import { Tree, TreeNode, InputTextarea } from 'primeng/primeng';

@Component({
  selector: 'ngx-transaction-comments',
  templateUrl: './transaction-comments.component.html',
  styleUrls: ['./transaction-comments.component.css']
})
export class TransactionCommentsComponent implements OnInit {

  @Input() transactionId: number;

  public transactionComments: TreeNode[];
  public newNode: TreeNode;
  public newNodeID: number;
  public foundNode: TreeNode;
  public newComment: string;
  public addingNewComment: boolean = false;
  private newMessageLevel: number;
  private foundNodeLevel: number;

  @ViewChild('elementSize') elementSize: ElementRef; // Needed for method calculateScrollPanelHeight()
    
  constructor() {
  }

  private initializeComponent(): void {
    this.transactionComments = [];

    //  Test data :
    //this.transactionComments = [
    //  {
    //    "data": {
    //      "id": "1",
    //      "parent_id": "",
    //      "header": "Morne Stander : 11/11/1111 11:11",
    //      "message": "Indentation 0px. Indentation 0px. Indentation 0px. Indentation 0px. Indentation 0px. Indentation 0px. Indentation 0px. Indentation 0px. Indentation 0px. Indentation 0px. Indentation 0px. Indentation 0px. Indentation 0px. ",
    //      "indentationLevel": "1",
    //      "replyMessage": "",
    //      "collapsed": true,
    //      "hasChildren": true
    //    },
    //    "expanded": false,
    //    "children": [
    //      {
    //        "data": {
    //          "id": "2",
    //          "parent_id": "1",
    //          "header": "Jacques Visage : 22/22/2222 22:22",
    //          "message": "Indentation level 0",
    //          "indentationLevel": "2",
    //          "replyMessage": "",
    //          "collapsed": true,
    //          "hasChildren": true
    //        },
    //        "expanded": false,
    //        "children": [
    //          {
    //            "data": {
    //              "id": "4",
    //              "parent_id": "2",
    //              "header": "Dawie Lombaard : 33/33/3333 33:33",
    //              "message": "So het ons nou gestop?",
    //              "indentationLevel": "3",
    //              "replyMessage": "",
    //              "collapsed": true,
    //              "hasChildren": false
    //            },
    //            "expanded": false,
    //            "children": []
    //          },
    //          {
    //            "data": {
    //              "id": "5",
    //              "parent_id": "2",
    //              "header": "Elisma Lombard : 33/33/3333 33:34",
    //              "message": "Nou wat nou?",
    //              "indentationLevel": "3",
    //              "replyMessage": "",
    //              "collapsed": true,
    //              "hasChildren": false
    //            },
    //            "expanded": false,
    //            "children": []
    //          }
    //        ]
    //      },
    //      {
    //        "data": {
    //          "id": "3",
    //          "parent_id": "1",
    //          "header": "Elize le Roux : 22/22/2222 22:22",
    //          "message": "20kb",
    //          "indentationLevel": "2",
    //          "replyMessage": "",
    //          "collapsed": true,
    //          "hasChildren": true
    //        },
    //        "expanded": false,
    //        "children": [
    //          {
    //            "data": {
    //              "id": "7",
    //              "parent_id": "3",
    //              "header": "Joe Black : 33/33/3333 33:34",
    //              "message": "20kb",
    //              "indentationLevel": "3",
    //              "replyMessage": "",
    //              "collapsed": true,
    //              "hasChildren": false
    //            },
    //            "expanded": false,
    //            "children": []
    //          }
    //        ]
    //      }
    //    ]
    //  },
    //  {
    //    "data": {
    //      "id": "6",
    //      "parent_id": "",
    //      "header": "Marius Bosman : 11/11/1111 11:11",
    //      "message": "Second level 0 message.",
    //      "indentationLevel": "1",
    //      "replyMessage": "",
    //      "collapsed": true,
    //      "hasChildren": true
    //    },
    //    "expanded": false,
    //    "children": [
    //      {
    //        "data": {
    //          "id": "8",
    //          "parent_id": "6",
    //          "header": "Shaun of the Dead : 22/22/2222 22:22",
    //          "message": "Abc def ghi jkl mno p q.",
    //          "indentationLevel": "2",
    //          "replyMessage": "",
    //          "collapsed": true,
    //          "hasChildren": false
    //        },
    //        "expanded": false,
    //        "children": []
    //      },
    //      {
    //        "data": {
    //          "id": "9",
    //          "parent_id": "6",
    //          "header": "Shaun of the Dead : 22/22/2222 22:23",
    //          "message": "Abc def ghi jkl mno p q.",
    //          "indentationLevel": "2",
    //          "replyMessage": "",
    //          "collapsed": true,
    //          "hasChildren": false
    //        },
    //        "expanded": false,
    //        "children": []
    //      },
    //      {
    //        "data": {
    //          "id": "10",
    //          "parent_id": "6",
    //          "header": "Shaun of the Dead : 22/22/2222 22:24",
    //          "message": "Abc def ghi jkl mno p q.",
    //          "indentationLevel": "2",
    //          "replyMessage": "",
    //          "collapsed": true,
    //          "hasChildren": false
    //        },
    //        "expanded": false,
    //        "children": []
    //      }
    //    ]
    //  },
    //  {
    //    "data": {
    //      "id": "6",
    //      "parent_id": "",
    //      "header": "Marius Bosman : 11/11/1111 11:11",
    //      "message": "Second level 0 message.",
    //      "indentationLevel": "1",
    //      "replyMessage": "",
    //      "collapsed": true,
    //      "hasChildren": false
    //    },
    //    "expanded": false,
    //    "children": []
    //  }
    //]
   
    this.newNodeID = 20;  // For testing only - Will be obtained from service
  }

  ngOnInit(): void {
    this.initializeComponent();
  }

  public submitNewComment(newMessage: string): void {
    this.collapseAll();
    this.newNodeID++;
    this.newNode = this.constructNewNode(this.newNodeID.toString(), "", newMessage, "1");
    this.transactionComments.push(this.newNode);
    this.addingNewComment = false;
    this.transactionComments = [...this.transactionComments];
    this.newComment = "";
  }

  public submitReplyComment(rowData: TreeNode): void {
    this.collapseAll();
    this.newNodeID++; // Will be replaced with service

    rowData['collapsed'] = !rowData['collapsed'];
    rowData['hasChildren'] = true;

    for (let i = 0; i < this.transactionComments.length; i++) { // Cycle through highest level parents
      this.getNode(this.transactionComments[i], rowData['id']);

      this.foundNodeLevel = 0;
      this.getNodeLevel(this.transactionComments[i], rowData['id'], 1);

      if (this.foundNode != null) {
        this.newNode = this.constructNewNode(this.newNodeID.toString(), rowData['id'], rowData['replyMessage'], (this.foundNodeLevel + 1).toString());
        this.foundNode.children.push(this.newNode);

        for (var _i = 0; _i <= this.foundNodeLevel - 1; _i++) {
          this.foundNode.expanded = true;
          this.foundNode = this.foundNode.parent;
        }

        this.foundNode = null;
      }
    }

    this.transactionComments = [...this.transactionComments];
  }

  private constructNewNode(newId: string, parentId: string, comment: string, indentationLevel: string): TreeNode {
    this.newNode =
      {
        "data": {
          "id": newId,
          "parent_id": parentId,
          "header": "{Signed in user} " + new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString(),
          "message": comment.trim(),
          "indentationLevel": indentationLevel,
          "replyMessage": "",
          "collapsed": true,
          "hasChildren": false
        },
        "expanded": false,
        "children": []
      };

    return this.newNode;
  }

  public toggleComment(rowData: TreeNode): void {
    rowData['replyMessage'] = "";
    rowData['collapsed'] = !rowData['collapsed'];

    if (!rowData['collapsed']) {
      this.addingNewComment = false;
    }
  }

  public clearNewComment(): void {
    this.newComment = "";
    this.addingNewComment = false;
  }

  public displayNewCommentNode(): void {
    this.addingNewComment = !this.addingNewComment;
  }

  private getNode(node: TreeNode, id: string): TreeNode {
    if (node.data['id'] == id) {
      this.foundNode = node;
      return node;
    }
    else {
      if (node.children) {
        node.children.forEach(childNode => {
          return this.getNode(childNode, id);
        });
      }
    }
  }

  private getNodeLevel(node: TreeNode, id: string, searchNodeLevel: number): TreeNode {
    if (node.data['id'] == id) {
      this.foundNodeLevel = searchNodeLevel;
      return;
    }
    else {
      if (node.children.length > 0) {
        searchNodeLevel++;
        node.children.forEach(childNode => { return this.getNodeLevel(childNode, id, searchNodeLevel); });
      }
    }
  }

  public expandAll(): void {
    if (this.transactionComments && this.transactionComments.length > 0) {
      this.transactionComments.forEach(node => {
        this.setExpanded(node, true);
      });

      this.transactionComments = [...this.transactionComments];
    }
  }

  public collapseAll(): void {
    if (this.transactionComments && this.transactionComments.length > 0) {
      this.transactionComments.forEach(node => {
        this.setExpanded(node, false);
      });

      this.transactionComments = [...this.transactionComments];
    }
  }

  private setExpanded(node: TreeNode, expand: boolean): void {
    node.expanded = expand;
    if (node.children) {
      node.children.forEach(childNode => {
        this.setExpanded(childNode, expand);
      });
    }
  }

  public calculateScrollPanelHeight(): string {
    if (this.addingNewComment) {
      return (this.elementSize.nativeElement.offsetHeight - 290).toString() + 'px';
    }
    else {
      return this.elementSize.nativeElement.offsetHeight.toString() - 82 + 'px';
    }
  }

}
