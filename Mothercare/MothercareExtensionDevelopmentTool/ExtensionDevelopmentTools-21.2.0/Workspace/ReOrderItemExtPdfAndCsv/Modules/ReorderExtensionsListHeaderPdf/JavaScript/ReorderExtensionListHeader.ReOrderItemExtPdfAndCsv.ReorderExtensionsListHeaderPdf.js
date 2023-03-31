
define(
	'ReorderExtensionListHeader.ReOrderItemExtPdfAndCsv.ReorderExtensionsListHeaderPdf'
,   [
		'ReorderExtensionListHeader.ReOrderItemExtPdfAndCsv.ReorderExtensionsListHeaderPdf.View',
		"ReorderExtensionListHeader.ReOrderItemExtPdfAndCsv.ReorderExtensionsListHeaderPdf.Model",
		'ListHeader.View',
		'underscore',
		'jQuery',
		'Utils',
		'Profile.Model',
		'Item.KeyMapping'
	]
,   function (
		ReorderExtensionsListHeaderPdfView,
		ReOrderCusttomcollectiom,
		ListHeaderView,
		_,
		jQuery,
		Utils,
		ProfileModel,
		ItemKeyMapping
	)
{
	'use strict';

	return  {
		mountToApp: function mountToApp (container)
		{
			// using the 'Layout' component we add a new child view inside the 'Header' existing view 
			// (there will be a DOM element with the HTML attribute data-view="Header.Logo")
			// more documentation of the Extensibility API in
			// https://system.netsuite.com/help/helpcenter/en_US/APIs/SuiteCommerce/Extensibility/Frontend/index.html
			
			// ListHeaderView.prototype.initalize
			var obj = ListHeaderView.prototype.events;
			obj['click [data-action="download_file_inExt"]'] = 'showDownload',
				ListHeaderView.prototype.events = obj;


				// get the data in suitescript service controller
				var CustomData = Utils.getAbsoluteUrl(getExtensionAssetsPath("services/ReorderExtensionsListHeaderPdf.Service.ss"))
			    jQuery.get(CustomData).then((value) => {
					container.htmlFile = value;
				});
				console.log(Utils);
			



			_.extend(ListHeaderView.prototype, {
				//Initialize extended
				showDownload: function showDownload(e) {
					var self = this;
					
					e.preventDefault();
					var conceptName = this.$('#checkDownloadInExtension').find(":selected").val();
					var emptyArray = [];
					var emptyPrice = [];
					if (this.collection.totalRecordsFound > 0) {
						
					
                        // get the data from collection and create a object 
						var any = this.collection.customAlldata;

					
						_.map(any, function (value) {
							var some=value.item.matrix_parent;
							if(_.isUndefined(some)){
								var emptystring=value.item.itemid || ''
							}else{
							  var emptystring=some.itemid
							}
						
							var skuname = value.item.itemid;
							var transdate = value.trandate;
							
							var price = value.item.onlinecustomerprice_detail.onlinecustomerprice_formatted;
							var SubtotalPrice = value.item.onlinecustomerprice_detail.onlinecustomerprice;

							var emptyObj = {
								ItemName: emptystring,
								ItemSkuId: skuname,
								LastPurchase: transdate,
								Price: price
							};
							// push the item data 
							emptyArray.push(emptyObj);
							// push only price 
							emptyPrice.push(SubtotalPrice);
						})
						// console.log(emptyArray);
						// var any = this.collection.models;
						// _.map(any, function (value) {
						// 	var itemname = value.attributes.item.attributes._name;
						// 	var skuname = value.attributes.item.attributes.itemid;
						// 	var transdate = value.attributes.trandate
						// 	var price = value.attributes.item.attributes.onlinecustomerprice_detail.onlinecustomerprice_formatted;
						// 	var SubtotalPrice = value.attributes.item.attributes.onlinecustomerprice_detail.onlinecustomerprice;

						// 	var emptyObj = {
						// 		ItemName: itemname,
						// 		ItemSkuId: skuname,
						// 		LastPurchase: transdate,
						// 		Price: price
						// 	};
						// 	// push the item data 
						// 	emptyArray.push(emptyObj);
						// 	// push only price 
						// 	emptyPrice.push(SubtotalPrice);
						// })

						if (_.isEqual(conceptName, 'downloadCsvButton')) {
							this.generateCsvinExtension(emptyArray);

						} else if (_.isEqual(conceptName, 'downloadPDFButton')) {
							this.generatePdfinExtension(emptyArray, emptyPrice)
						}
					}
				},
				generateCsvinExtension: function generatePdfinExtension(CsvData) {
					// create a csv as per our Requirement
					var headdingRows = Object.keys(CsvData[0]);
					var csv = '';
					headdingRows = headdingRows.join(',');
					csv += headdingRows;
					csv += '\n';
					_.each(CsvData, function (value) {
						for (const key in value) {
							csv += value[key].replace(/,/g, '') + ',';
						}
						csv += '\r\n';
					});
					// open the csv file  
					window.open('data:text/csv;charset=utf-8,' + encodeURIComponent(csv));

				},
				generatePdfinExtension: function generatePdfinExtension(PdfData, Price) {
					var selectedFilterData=this.selectedFilter.itemValue;
					var CustomizedSelectedData=selectedFilterData.split("T");
					var fromInCustomizedSelectedData=CustomizedSelectedData[0];
					var toInCustomizedSelectedData=CustomizedSelectedData[1];
					var EmptyObjDate={};
					// replace the from or to data to as per the field will be active or not then the filter will apply
					if(_.isEmpty(this.selectedRange)){
						EmptyObjDate.From=fromInCustomizedSelectedData;
						EmptyObjDate.to=toInCustomizedSelectedData;

						
					}else{
						if(!_.isEmpty(this.selectedRange.from)){
							EmptyObjDate.From=this.selectedRange.from;
						}else{
							EmptyObjDate.From=fromInCustomizedSelectedData;
						}
						if(!_.isEmpty(this.selectedRange.to)){
							EmptyObjDate.to=this.selectedRange.to;
						}else{
							EmptyObjDate.to=toInCustomizedSelectedData;
						}
					}
					var headdingRows = Object.keys(PdfData[0]);
					// adding heading content
					var theadRow = '<tr>'
					theadRow += ' <th class="no">#</th>';
					for (let i = 0; i < headdingRows.length; i++) {
						theadRow += `<th class="heading_0${i + 1}"> ${headdingRows[i]}</th>`;
					}
					theadRow += '</tr>';
					let headingText = "ReOrder Item";
					//  filter the customer Details
					var customerFirstName = this.customExtProfileModel.get('firstname') || '';
					var customerEmail = this.customExtProfileModel.get('email') || '';
					var customerLastName = this.customExtProfileModel.get('lastname') || '';
					var Customername = customerFirstName + " " + customerLastName;
					// create a table row Data in dynamic
					var tr = '<tr class="bodySec">';
					_.map(PdfData, function (value, keys) {
						const k = Object.keys(value);
						tr += `<td class="no">${keys + 1} </td>`
						for (const key in value) {
							tr += `<td class="heading_0" align="center"> ${value[key]}</td>`;
						}
						tr += '</tr>';
					})
					// adding the price
					const reducer = (accumulator, curr) => accumulator + curr;
					var totalPrice = Price.reduce(reducer);
					// relpace the data in html file
					var getHtmlData = container.htmlFile.htmlTextFile;
					var replaceData = getHtmlData.replace("headingContent1", headingText);
					replaceData = replaceData.replace("Customername", Customername);
					replaceData = replaceData.replace("tableData", tr);
					replaceData = replaceData.replace("totalPriceAddition", totalPrice);
					replaceData = replaceData.replace("theadRow", theadRow);
					replaceData = replaceData.replace("headingContent2", headingText);
					replaceData = replaceData.replace("DateFormat.fromDate", EmptyObjDate.From);
					replaceData = replaceData.replace("DateFormat.toDate", EmptyObjDate.to);
					replaceData = replaceData.replace("john@example.com", customerEmail);
					replaceData = replaceData.replace("any@example.com", customerEmail);

					this.PrintPdf(replaceData);
				},
				PrintPdf: function PrintPdf(MainPdfData) {
                //    print the Pdf in iframe 
					var iframe = document.createElement('iframe');

					iframe.style.visibility = "hidden";

					iframe.setAttribute("style", "height:100%;width:100%; display:none;");
					document.body.appendChild(iframe);
					iframe.contentWindow.document.open();
					iframe.contentWindow.document.write(MainPdfData);
					// Add the IFrame to the web page.
					iframe.contentWindow.focus();
					iframe.contentWindow.print(); // Print.

				},

				initialize: _.wrap(ListHeaderView.prototype.initialize, function initialize(fn) {
					fn.apply(this, _.toArray(arguments).slice(1));
					this.customExtProfileModel = ProfileModel.getInstance();
                   this.cust=new ReOrderCusttomcollectiom()

				}),
				getContext: _.wrap(ListHeaderView.prototype.getContext, function getContext(fn) {
					var ret = fn.apply(this, _.toArray(arguments).slice(1));
					var obj1 = this.view.$el[0].baseURI;
					ret.isActive = false;
					if (obj1.indexOf('reorderItems') !== -1) {
						ret.isActive = true;
					}

					return ret;
				})
			})
		}
	};
});
