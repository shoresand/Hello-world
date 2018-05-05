option = {
    title: {
        text: '基础雷达图'
    },
    tooltip: {},
    legend: {
        data: ['个人兴趣（Tendency）', '掌握技能（Abilities）']
    },
    radar: {
        // shape: 'circle',
        name: {
            textStyle: {
                color: '#fff',
                backgroundColor: '#999',
                borderRadius: 3,
                padding: [3, 5]
           }
        },
        indicator: [
           { name: '研究型（I）', max: 500},
           { name: '艺术型(A) ', max: 500},
           { name: '社会型（S）', max: 500},
           { name: '企业型（E）', max: 500},
           { name: '传统型（C）', max: 500},
           { name: '现实型（R）', max: 500}
        ]
    },
    series: [{
        name: '预算 vs 开销（Budget vs spending）',
        type: 'radar',
        // areaStyle: {normal: {}},
        data : [
            {
                value : [325, 258, 425, 378, 100, 300], //逆时针从上开始
                name : '个人兴趣（Tendency）'
            },
             {
                value : [221, 170, 385 , 360 , 125 , 260,],
                name : '掌握技能（Abilities）'
            }
        ]
    }]
};
