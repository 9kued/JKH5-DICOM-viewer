import { Template } from 'meteor/templating';
import { OHIF } from 'meteor/ohif:core';
import 'meteor/ohif:viewerbase';

Template.toolbarSection.onCreated(() => {
    const instance = Template.instance();

    if (OHIF.uiSettings.leftSidebarOpen) {
        instance.data.state.set('leftSidebar', 'studies');
    }
});

Template.toolbarSection.helpers({
    leftSidebarToggleButtonData() {
        const instance = Template.instance();
        return {
            toggleable: true,
            key: 'leftSidebar',
            value: instance.data.state,
            options: [{
                value: 'studies',
                svgLink: 'packages/ohif_viewerbase/assets/icons.svg#icon-studies',
                svgWidth: 15,
                svgHeight: 13,
                bottomLabel: '序列'
            }]
        };
    },

    rightSidebarToggleButtonData() {
        const instance = Template.instance();
        return {
            toggleable: true,
            key: 'rightSidebar',
            value: instance.data.state,
            options: [{
                value: 'measurements',
                svgLink: '/packages/ohif_viewerbase/assets/icons.svg#icon-measurements-lesions',
                svgWidth: 18,
                svgHeight: 10,
                bottomLabel: '测量'
            }]
        };
    },

    toolbarButtons() {
        // Check if the measure tools shall be disabled
        const isToolDisabled = false; //!Template.instance().data.timepointApi;

        const targetSubTools = [];

        targetSubTools.push({
            id: 'bidirectional',
            title: '双向',
            classes: 'imageViewerTool rm-l-3',
            svgLink: '/packages/ohif_viewerbase/assets/icons.svg#icon-tools-measure-target',
            disabled: isToolDisabled
        });

        targetSubTools.push({
            id: 'targetCR',
            title: 'CR Target',
            classes: 'imageViewerTool',
            svgLink: '/packages/ohif_viewerbase/assets/icons.svg#icon-tools-measure-target-cr',
            disabled: isToolDisabled
        });

        targetSubTools.push({
            id: 'targetUN',
            title: 'UN Target',
            classes: 'imageViewerTool',
            svgLink: '/packages/ohif_viewerbase/assets/icons.svg#icon-tools-measure-target-un',
            disabled: isToolDisabled
        });

        const extraTools = [];

        extraTools.push({
            id: 'stackScroll',
            title: '序列滚动',
            classes: 'imageViewerTool',
            iconClasses: 'fa fa-bars'
        });

        extraTools.push({
            id: 'rotateR',
            title: '右旋转',
            classes: 'imageViewerCommand',
            svgLink: '/packages/ohif_viewerbase/assets/icons.svg#icon-tools-rotate-right'
        });

        extraTools.push({
            id: 'magnify',
            title: '放大',
            classes: 'imageViewerTool toolbarSectionButton',
            iconClasses: 'fa fa-circle'
        });

        extraTools.push({
            id: 'wwwcRegion',
            title: 'ROI窗口',
            classes: 'imageViewerTool',
            iconClasses: 'fa fa-square'
        });

        extraTools.push({
            id: 'dragProbe',
            title: '探针',
            classes: 'imageViewerTool',
            iconClasses: 'fa fa-dot-circle-o'
        });

        extraTools.push({
            id: 'ellipticalRoi',
            title: '椭圆',
            classes: 'imageViewerTool',
            iconClasses: 'fa fa-circle-o'
        });

        extraTools.push({
            id: 'rectangleRoi',
            title: '矩形',
            classes: 'imageViewerTool',
            iconClasses: 'fa fa-square-o'
        });

        extraTools.push({
            id: 'flipH',
            title: '水平翻转',
            classes: 'imageViewerCommand',
            svgLink: '/packages/ohif_viewerbase/assets/icons.svg#icon-tools-flip-horizontal'
        });

        extraTools.push({
            id: 'flipV',
            title: '垂直翻转',
            classes: 'imageViewerCommand',
            svgLink: '/packages/ohif_viewerbase/assets/icons.svg#icon-tools-flip-vertical'
        });

        extraTools.push({
            id: 'invert',
            title: '反片',
            classes: 'imageViewerCommand',
            iconClasses: 'fa fa-adjust'
        });

        extraTools.push({
            id: 'toggleDownloadDialog',
            title: '下载',
            classes: 'imageViewerCommand',
            iconClasses: 'fa fa-camera',
            active: () => $('#downloadDialog').is(':visible')
        });

        extraTools.push({
            id: 'clearTools',
            title: '清除',
            classes: 'imageViewerCommand',
            iconClasses: 'fa fa-trash'
        });

        const buttonData = [];

        buttonData.push({
            id: 'zoom',
            title: '缩放',
            classes: 'imageViewerTool',
            svgLink: 'packages/ohif_viewerbase/assets/icons.svg#icon-tools-zoom'
        });

        buttonData.push({
            id: 'wwwc',
            title: '调窗',
            classes: 'imageViewerTool',
            svgLink: 'packages/ohif_viewerbase/assets/icons.svg#icon-tools-levels'
        });

        buttonData.push({
            id: 'pan',
            title: '移动',
            classes: 'imageViewerTool',
            svgLink: 'packages/ohif_viewerbase/assets/icons.svg#icon-tools-pan'
        });

        buttonData.push({
            id: 'linkStackScroll',
            title: '链接',
            classes: 'imageViewerCommand toolbarSectionButton nonAutoDisableState',
            svgLink: '/packages/ohif_viewerbase/assets/icons.svg#icon-tools-link',
            disableFunction: OHIF.viewerbase.viewportUtils.isStackScrollLinkingDisabled
        });

        buttonData.push({
            id: 'toggleTarget',
            title: '标尺',
            classes: 'rm-l-3',
            svgLink: '/packages/ohif_viewerbase/assets/icons.svg#icon-tools-measure-target',
            disabled: isToolDisabled,
            subTools: targetSubTools
        });

        buttonData.push({
            id: 'nonTarget',
            title: '无标尺',
            classes: 'imageViewerTool',
            svgLink: '/packages/ohif_viewerbase/assets/icons.svg#icon-tools-measure-non-target',
            disabled: isToolDisabled
        });

        buttonData.push({
            id: 'length',
            title: '测量',
            classes: 'imageViewerTool toolbarSectionButton',
            svgLink: 'packages/ohif_viewerbase/assets/icons.svg#icon-tools-measure-temp'
        });

        buttonData.push({
            id: 'annotate',
            title: '标注',
            classes: 'imageViewerTool',
            svgLink: 'packages/ohif_viewerbase/assets/icons.svg#icon-tools-measure-non-target'
        });

        buttonData.push({
            id: 'angle',
            title: '角度',
            classes: 'imageViewerTool',
            iconClasses: 'fa fa-angle-left'
        });

        buttonData.push({
            id: 'resetViewport',
            title: '重置',
            classes: 'imageViewerCommand',
            iconClasses: 'fa fa-undo'
        });

        if (!OHIF.uiSettings.displayEchoUltrasoundWorkflow) {

            buttonData.push({
                id: 'previousDisplaySet',
                title: '向前',
                classes: 'imageViewerCommand',
                iconClasses: 'fa fa-toggle-up fa-fw'
            });

            buttonData.push({
                id: 'nextDisplaySet',
                title: '向后',
                classes: 'imageViewerCommand',
                iconClasses: 'fa fa-toggle-down fa-fw'
            });

            const { isPlaying } = OHIF.viewerbase.viewportUtils;
            buttonData.push({
                id: 'toggleCinePlay',
                title: () => isPlaying() ? '停止' : '播放',
                classes: 'imageViewerCommand',
                iconClasses: () => ('fa fa-fw ' + (isPlaying() ? 'fa-stop' : 'fa-play')),
                active: isPlaying
            });

            buttonData.push({
                id: 'toggleCineDialog',
                title: '帧速',
                classes: 'imageViewerCommand',
                iconClasses: 'fa fa-youtube-play',
                active: () => $('#cineDialog').is(':visible')
            });
        }

        buttonData.push({
            id: 'layout',
            title: '布局',
            iconClasses: 'fa fa-th-large',
            buttonTemplateName: 'layoutButton'
        });

        buttonData.push({
            id: 'toggleMore',
            title: '更多',
            classes: 'rp-x-1 rm-l-3',
            svgLink: 'packages/ohif_viewerbase/assets/icons.svg#icon-tools-more',
            subTools: extraTools
        });

        return buttonData;
    },

    hangingProtocolButtons() {
        let buttonData = [];

        buttonData.push({
            id: 'previousPresentationGroup',
            title: '向前',
            iconClasses: 'fa fa-step-backward',
            buttonTemplateName: 'previousPresentationGroupButton'
        });

        buttonData.push({
            id: 'nextPresentationGroup',
            title: '向后',
            iconClasses: 'fa fa-step-forward',
            buttonTemplateName: 'nextPresentationGroupButton'
        });

        return buttonData;
    }

});

Template.toolbarSection.events({
    'click #toggleTarget'(event, instance) {
        const $target = $(event.currentTarget);
        if (!$target.hasClass('active') && $target.hasClass('expanded')) {
            OHIF.viewerbase.toolManager.setActiveTool('bidirectional');
        }
    },
});

Template.toolbarSection.onRendered(function() {
    const instance = Template.instance();

    instance.$('#layout').dropdown();

    // Set disabled/enabled tool buttons that are set in toolManager
    const states = OHIF.viewerbase.toolManager.getToolDefaultStates();
    const disabledToolButtons = states.disabledToolButtons;
    const allToolbarButtons = $('#toolbar').find('button');
    if (disabledToolButtons && disabledToolButtons.length > 0) {
        for (let i = 0; i < allToolbarButtons.length; i++) {
            const toolbarButton = allToolbarButtons[i];
            $(toolbarButton).prop('disabled', false);

            const index = disabledToolButtons.indexOf($(toolbarButton).attr('id'));
            if (index !== -1) {
                $(toolbarButton).prop('disabled', true);
            }
        }
    }
});
