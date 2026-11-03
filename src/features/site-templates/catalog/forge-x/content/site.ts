export type Copy = {
    zh: string;
    en: string;
};
export const copy = (zh: string, en: string): Copy => ({ zh, en });
export const nav = [['philosophY', '训练理念', 'Philosophy'], ['services', '训练项目', 'Services'], ['teamS', '教练团队', 'Coaches'], ['Results', '训练成果', 'Results']] as const;
export const stats = [{ value: 2400, suffix: '+', label: copy('学员接受训练', 'Members trained') }, { value: 98, suffix: '%', label: copy('会员留存率', 'Retention rate') }, { value: 12, suffix: '', label: copy('专业教练', 'Elite coaches') }];
export const disciplines = [
    { name: copy('MRT 代谢力量训练', 'MRT'), description: copy('以减脂为目标的代谢负重课程，同时调动肌肉与心肺，让训练兼顾力量与耐力。', 'This is a metabolic weight training class for fat loss. This class works the muscles while tasking the heart as well.'), image: 'RfRZtyBw0XuXLOT1kI4xD0dhTE.png' },
    { name: copy('踏板有氧', 'StepCardio'), description: copy('节奏鲜明、能量充沛的踏板有氧课程。', 'A high energy step-based cardio class.'), image: 'SEWuX7NlXPgtt2v5phAS3ixgpPE.png' },
    { name: copy('动感单车', 'Spin Club'), description: copy('伴随高节奏音乐，在室内骑行中找到自己的输出节奏。', 'Indoor cycling class set to high tempo music.'), image: 'CtMOkq2EbqMYHhvJWzWBfDfro.png' },
    { name: copy('体能引擎', 'Engine Building'), description: copy('面向需要持续输出的运动者，建立不在后半程衰减的代谢体能。', "Metabolic conditioning protocols for athletes who need output that doesn't fade in round three."), image: 'kvlHYbu79WqIQvccJwfv2uxoYA.png' },
    { name: copy('恢复评估', 'Recovery Audit'), description: copy('结合睡眠、HRV 与训练负荷，分析真正影响表现的限制因素。', "Sleep, HRV, and load tracked against performance. We find what's actually limiting you."), image: 'T2BARLmj960UOlrB0knl43H6dKE.png' },
];
export const differences = [
    { title: copy('数据，先于直觉', 'Data over instinct'), body: copy('记录每次训练与每项指标，让计划根据您的数字调整。', 'Every session logged, every metric tracked. Your program adjusts to your numbers, not a template.') },
    { title: copy('12 位教练，同一专业标准', '12 elite coaches, one standard'), body: copy('每位教练遵循同一套循证体系，提供一致而可靠的训练体验。', 'Every coach runs the same evidence-based system — you get consistency, not personality roulette.') },
    { title: copy('严格控制班级人数', 'Capped cohorts'), body: copy('团体课程不超过 8 人。保持足够强度，也确保每个人都被看见。', 'Group sessions stay under 8. Enough intensity to push you, small enough to be seen.') },
    { title: copy('98% 留存，来自持续积累', '98% retention, not luck'), body: copy('成果不断积累，是会员持续训练的重要原因。', 'Members stay because the results compound. The number on the homepage is the whole pitch.') },
];
export const tiers = [
    { id: 'group', label: copy('团体训练', 'Group Training'), price: 240, benefits: [copy('每班最多 8 人，每周 4 次', 'Capped 8-person sessions, 4x/week'), copy('共享训练计划，每月更新', 'Shared programming, updated monthly'), copy('训练记录与会员应用', 'Access to member app + logging'), copy('每季度一次进度回顾', 'Quarterly progress check-in')] },
    { id: 'one-to-one', label: copy('一对一指导', '1-on-1 Coaching'), price: 620, benefits: [copy('个性化训练编排', 'Fully personalized programming'), copy('每周回访，直接联系教练', 'Weekly check-ins, direct coach line'), copy('恢复与 HRV 监测', 'Recovery + HRV monitoring'), copy('全场馆优先预约', 'Priority scheduling, all locations'), copy('季度力量测试周期', 'Quarterly strength testing block')] },
    { id: 'performance', label: copy('全面表现计划', 'Full Performance'), price: 980, benefits: [copy('包含一对一指导全部内容', 'Everything in 1-on-1 Coaching'), copy('营养与补充方案示例', 'Full nutrition + supplement protocol'), copy('每月生物指标测试示例', 'Monthly biometric testing panel'), copy('直接联系力量训练负责人', 'Direct access to Head of Strength')] },
];
export const process = [
    { title: copy('提交申请', 'Apply'), body: copy('说明训练经历与目标，约需 5 分钟，无需支付信息。', 'Tell us your training history and goals. Takes under 5 minutes, no payment required.') },
    { title: copy('策略沟通', 'Strategy Call'), body: copy('与教练交流约 30 分钟，评估起点与计划的匹配程度。', "30 minutes with a coach to assess where you are and whether we're the right fit.") },
    { title: copy('建立基线', 'Baseline Testing'), body: copy('通过现场或远程评估，确定计划所依据的起始数据。', 'In-person or remote assessment sets the numbers your program will be built from.') },
    { title: copy('开启首个周期', 'First Block'), body: copy('训练编排准备就绪，测试后 48 小时内进入第一周。', 'Your programming goes live. Week one starts within 48 hours of testing.') },
];
export const faq = [
    [copy('申请前需要训练经验吗？', 'Do I need training experience to apply?'), copy('不需要。目前约三分之一的会员从零开始。基线评估会根据您的实际起点建立计划，重视的是投入，而不是经验。', "No. About a third of current members started at zero. Baseline testing sets your program from wherever you're starting — the standard is effort, not experience.")],
    [copy('错过进度回访怎么办？', 'What happens if I miss a check-in?'), copy('教练会在当周重新安排。偶尔错过不会影响计划，持续缺席则可能暂停服务。', "Your coach reschedules it within the week. Missing check-ins occasionally won't affect your program, but consistent no-shows may pause access.")],
    [copy('之后可以调整会员档位吗？', 'Can I switch tiers later?'), copy('可以在新的计费周期开始时申请升级或降级。演示站不创建实际会员或计费账户。', 'Yes, you can upgrade or downgrade at the start of any billing cycle from your member dashboard. This demonstration does not create membership or billing accounts.')],
    [copy('营养指导默认包含在内吗？', 'Is nutrition coaching included by default?'), copy('一对一指导与全面表现计划包含营养指导；团体训练可另行选择。实际服务内容应由运营方确认。', 'Nutrition guidance is included in 1-on-1 Coaching and Full Performance tiers. Group Training members can add it separately. Actual services must be confirmed by the operator.')],
    [copy('取消会员的规则是什么？', "What's the cancellation policy?"), copy('原站 FAQ 的示例为在下一计费日前提前 14 天通知取消，无长期合约；会员区另写 30 天，存在冲突。本演示不签约，正式运营前须统一规则。', "The reference FAQ says 14 days’ notice before the next billing date, with no long-term contract, while its membership section says 30 days. This demonstration does not enter contracts; the operator must resolve that discrepancy before launch.")],
];
export const results = [{ name: 'Marcus T.', weeks: 16, outcome: copy('减重 24 磅 / 力量提升 18%', '–24 lbs / +18% Strength'), image: '7SZWDkXldR23cGa1V5dBjiHwMn8.png', metrics: [{ label: copy('体脂目标进度', 'Body fat goal progress'), value: 82 }, { label: copy('硬拉目标进度', 'Deadlift goal progress'), value: 70 }] }, { name: 'Elena R.', weeks: 20, outcome: copy('减重 14 磅 / 耐力提升 32%', '–14 lbs / +32% Endurance'), image: '7UZxiylzBm6zGhaesZTF16X5Q.png', metrics: [{ label: copy('最大摄氧量目标进度', 'VO₂ max goal progress'), value: 88 }, { label: copy('深蹲目标进度', 'Squat goal progress'), value: 64 }] }];
export const coaches = [{ name: 'Kane Voss', role: copy('力量训练负责人', 'Head of Strength'), image: '1YZVPBLcyRsKxbEm3pKyiTZO4.jpg' }, { name: 'Sera Lin', role: copy('运动表现负责人', 'Performance Lead'), image: 'emKHIxQ67OnuNjMct02iSrpo3Fk.jpg' }, { name: 'Theo Marsh', role: copy('营养与恢复', 'Nutrition + Recovery'), image: 'dZrOyXVkKGU7qlBlxYRI0hVe9Aw.jpg' }];
export const experience = [{ id: 'none', label: copy('零基础', 'None - starting at zero') }, { id: 'under-one', label: copy('不足 1 年', 'Under 1 year') }, { id: 'one-to-three', label: copy('1–3 年', '1–3 years') }, { id: 'over-three', label: copy('3 年以上', '3+ years') }];
export const goals = [{ id: 'strength', label: copy('提升力量', 'Build strength') }, { id: 'fat-loss', label: copy('减脂与身体重塑', 'Fat loss / recomposition') }, { id: 'muscle', label: copy('增长肌肉', 'Build Muscle') }, { id: 'performance', label: copy('提升运动表现', 'Athletic Performance') }];
