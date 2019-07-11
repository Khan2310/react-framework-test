import React from 'react';
import TRURLMapping from "tm-react/src/artifacts/config/tr-url-mapping";
import TRLayoutInfoData from "tm-react/src/artifacts/data/view/tr-layout-info-data";

const PublicLayout = React.lazy(() => import('../view/layouts/public-layout'));
const LoginView = React.lazy(() => import('../view/authentication/login-view'));
const MyView = React.lazy(() => import('../view/my-view'));
const MyView2 = React.lazy(() => import('../view/my-view-2'));


export default class URLMapping extends TRURLMapping {

    public getLayoutsAndPages(): Array<TRLayoutInfoData> {
        let pageWithLayout: Array<TRLayoutInfoData> = [];

        let publicLayoutInfo: TRLayoutInfoData = new TRLayoutInfoData();
        publicLayoutInfo.layout = PublicLayout;
        publicLayoutInfo.addPageInstance("/", LoginView);
        publicLayoutInfo.addPageInstance("/ui-component", MyView);
        publicLayoutInfo.addPageInstance("/logo-component", MyView2);
        pageWithLayout.push(publicLayoutInfo);
        return pageWithLayout
    }

}