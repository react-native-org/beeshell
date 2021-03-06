import 'react-native';
import React from 'react';
import Component from '../modules/FilterPanel';
import FilterBlock from '../modules/FilterPanel/FilterBlock';
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';


describe('renders correctly', () => {

    it('basic use', () => {
        const data = [
            {
                "category_id": 10000,
                "category_name": "门店品类",
                "items": [{
                    "label_name": "美食",
                    "label_id": 10368
                }, {
                    "label_name": "甜点饮品",
                    "label_id": 10369
                }, {
                    "label_name": "生活超市",
                    "label_id": 10370
                }, {
                    "label_name": "生鲜果蔬",
                    "label_id": 10371
                }, {
                    "label_name": "医药健康",
                    "label_id": 10372
                }, {
                    "label_name": "鲜花绿植",
                    "label_id": 10373
                }],
                "support_muti_choice": 0
            }, {
                "category_id": 10200,
                "category_name": "配送方式",
                "items": [{
                    "label_name": "美团跑腿",
                    "label_id": 10398
                }, {
                    "label_name": "加盟",
                    "label_id": 10399
                }, {
                    "label_name": "自建",
                    "label_id": 10400
                }, {
                    "label_name": "城市代理",
                    "label_id": 10401
                }, {
                    "label_name": "快送",
                    "label_id": 10403
                }, {
                    "label_name": "混合配送",
                    "label_id": 10404
                }, {
                    "label_name": "商家自配",
                    "label_id": 10402
                }],
                "support_muti_choice": 0
            }, {
                "category_id": 10351,
                "category_name": "门店品牌",
                "items": [{
                    "label_name": "大连锁",
                    "label_id": 10451
                }, {
                    "label_name": "城市品牌",
                    "label_id": 10453
                }, {
                    "label_name": "CKA",
                    "label_id": 10458
                }, {
                    "label_name": "总部生活超市",
                    "label_id": 10459
                }, {
                    "label_name": "总部生鲜连锁",
                    "label_id": 10460
                }],
                "support_muti_choice": 0
            }, {
                "category_id": 7,
                "category_name": "商家品质标签",
                "support_muti_choice": 1,
                "items": [{
                    "label_id": 14,
                    "label_name": "头部"
                }, {
                    "label_id": 15,
                    "label_name": "腰部"
                }, {
                    "label_id": 16,
                    "label_name": "尾部"
                }, {
                    "label_id": 17,
                    "label_name": "僵尸"
                }, {
                    "label_id": 12,
                    "label_name": "优势"
                }, {
                    "label_id": 22,
                    "label_name": "体验优"
                }, {
                    "label_id": 23,
                    "label_name": "体验良"
                }, {
                    "label_id": 24,
                    "label_name": "体验差"
                }]
            }, {
                "category_id": 6,
                "category_name": "商家运营标签",
                "support_muti_choice": 1,
                "items": [{
                    "label_id": 35,
                    "label_name": "竞对转单池"
                }, {
                    "label_id": 13,
                    "label_name": "新店加权"
                }, {
                    "label_id": 33,
                    "label_name": "长期未拜访"
                }, {
                    "label_id": 25,
                    "label_name": "待激活"
                }, {
                    "label_id": 26,
                    "label_name": "即将激活"
                }, {
                    "label_id": 32,
                    "label_name": "营业时长短"
                }, {
                    "label_id": 34,
                    "label_name": "昨日无活动"
                }, {
                    "label_id": 41,
                    "label_name": "合同已过期"
                }, {
                    "label_id": 42,
                    "label_name": "合同即将到期"
                }, {
                    "label_id": 43,
                    "label_name": "资质已过期"
                }, {
                    "label_id": 44,
                    "label_name": "资质即将到期"
                }]
            }, {
                "category_id": 99999,
                "category_name": "自定义标签",
                "support_muti_choice": 1,
                "items": [{
                    "label_id": 34,
                    "label_name": "昨日无活动"
                }, {
                    "label_id": 41,
                    "label_name": "合同已过期"
                }, {
                    "label_id": 42,
                    "label_name": "合同即将到期"
                }, {
                    "label_id": 43,
                    "label_name": "资质已过期"
                }, {
                    "label_id": 44,
                    "label_name": "资质即将到期"
                }]
            }
        ];

        const component = renderer.create(
            <Component
                activeExpand
                hasCommonLabals={true}
                commonLabels={[
                    {
                        "label_name": "美食",
                        "label_id": 10368
                    },
                    {
                        "label_name": "美团跑腿",
                        "label_id": 10398
                    }
                ]}
                modyfyCommonLabels={() => {
                }}
                filterPanelInfo={data}
                onConfirm={(result, filterPanelInfo) => {
                }}
            />
        );
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();

        const instance = component.getInstance();

        instance.resetFilterPanelInfoBySelected();
        instance.deleteLabel(1);
        instance.toggleMode();
        instance.selectLabel(1);
    });


    it('FilterBlock use', () => {
        const component = renderer.create(
            <FilterBlock
                hasBottomBorder
                type={0}
                value={1}
                blockData={[]}
                blockTitle={''}
                isEditing={false}
                key={1}
                setSelectedValue={(selectedValue) => {
                }}
            />
        );

        const instance = component.getInstance();
        instance.measureContent();
        instance.showMore();
    });
});

