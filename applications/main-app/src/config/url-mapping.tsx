import React from 'react';
import TRURLMapping from "tm-react/src/artifacts/config/tr-url-mapping";
import TRLayoutInfoData from "tm-react/src/artifacts/data/view/tr-layout-info-data";
import MyLayout from "../view/layouts/my-layout";
import MyView from "../view/my-view";


export default class URLMapping extends TRURLMapping {

    public getLayoutsAndPages(): Array<TRLayoutInfoData> {
        let pageWithLayout: Array<TRLayoutInfoData> = [];

        let publicLayoutInfo: TRLayoutInfoData = new TRLayoutInfoData();
        publicLayoutInfo.layout = MyLayout
        publicLayoutInfo.addPageInstance("/", MyView);
        pageWithLayout.push(publicLayoutInfo);
        return pageWithLayout
    }

}