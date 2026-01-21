---
description: 生成草图风格的 drawio 流程图文件
---

# 生成 Drawio 流程图

根据用户描述的流程或架构，生成一个**草图风格 (Sketch Style)** 的 drawio 文件。

## 设计规范

### 1. 整体风格
- **必须使用草图风格**：所有形状添加 `sketch=1;curveFitting=1;jiggle=2`
- 线条粗犷、手绘感，不要太规整
- 布局清晰，从左到右或从上到下的流程

### 2. 颜色方案 (Google 4色)
使用 Google Logo 的经典配色：

| 颜色 | 主色 | 填充色 | 边框色 | 文字色 |
|------|------|--------|--------|--------|
| 蓝色 | #4285F4 | #C6DAFC (浅) / #A8C7FA (中) / #1A73E8 (深) | #1A73E8 | #0D47A1 |
| 黄色 | #FBBC05 | #FEEFC3 (浅) / #FDE293 (中) | #E37400 | #5D4200 |
| 红色 | #EA4335 | #FAD2CF (浅) / #F28B82 (中) | #C5221F | #7F0000 |
| 绿色 | #34A853 | #CEEAD6 (浅) / #A8DAB5 (中) / #188038 (深) | #188038 | #0B5323 |
| 灰色 | #5F6368 | #F1F3F4 (浅) / #DADCE0 (中) / #BDC1C6 (深) | #5F6368 | #202124 |

### 3. 形状规范

```
角色/人物：椭圆形 (ellipse)
- style: ellipse;whiteSpace=wrap;html=1;sketch=1;curveFitting=1;jiggle=2;strokeWidth=3;fontStyle=1;fontSize=14;

斜杠命令：平行四边形 (parallelogram)
- style: shape=parallelogram;perimeter=parallelogramPerimeter;whiteSpace=wrap;html=1;fixedSize=1;sketch=1;curveFitting=1;jiggle=2;strokeWidth=2;fontStyle=1;fontSize=12;

Skill/处理块：矩形 (rounded=0)
- style: rounded=0;whiteSpace=wrap;html=1;sketch=1;curveFitting=1;jiggle=2;strokeWidth=2;fontSize=12;fontStyle=1;

文档/文件：文档形状 (document)
- style: shape=document;whiteSpace=wrap;html=1;boundedLbl=1;sketch=1;curveFitting=1;jiggle=2;strokeWidth=2;fontSize=12;fontStyle=1;

背景区域：圆角矩形 (rounded=1)
- style: rounded=1;whiteSpace=wrap;html=1;sketch=1;curveFitting=1;jiggle=2;strokeWidth=2;

连接线：正交边 (orthogonalEdgeStyle)
- style: edgeStyle=orthogonalEdgeStyle;rounded=1;sketch=1;curveFitting=1;jiggle=2;html=1;strokeWidth=2;
- 虚线流程: 添加 dashed=1;strokeWidth=4;
```

### 4. 文字规范
- **绝对不要使用白色文字**
- 使用各颜色对应的深色文字（见上表）
- 标题: fontSize=24, fontStyle=1 (粗体)
- 阶段标签: fontSize=16, fontStyle=1
- 内容文字: fontSize=12, fontStyle=1
- 换行使用 `&#xa;` 

### 5. 布局建议
- 画布大小: 1600x900
- 角色放在顶部 (y=100)
- 流程阶段从左到右排列
- 每个阶段用背景色块区分
- 右侧可添加图例 (legend)

## 文件模板

```xml
<mxfile host="65bd71144e">
    <diagram id="workflow" name="流程图">
        <mxGraphModel dx="828" dy="347" grid="0" gridSize="10" guides="1" tooltips="1" connect="1" arrows="1" fold="1" page="1" pageScale="1" pageWidth="1600" pageHeight="900" math="0" shadow="0">
            <root>
                <mxCell id="0"/>
                <mxCell id="1" parent="0"/>
                <!-- 标题 -->
                <mxCell id="title" value="流程图标题" style="text;html=1;strokeColor=none;fillColor=none;align=center;verticalAlign=middle;whiteSpace=wrap;rounded=0;fontStyle=1;fontSize=24;fontColor=#202124;sketch=1;" parent="1" vertex="1">
                    <mxGeometry x="500" y="20" width="400" height="40" as="geometry"/>
                </mxCell>
                <!-- 在此添加更多元素 -->
            </root>
        </mxGraphModel>
    </diagram>
</mxfile>
```

## 执行任务

请根据用户的需求：

1. **理解流程**：分析用户描述的流程、角色、步骤
2. **规划布局**：确定阶段数量、角色、连接关系
3. **选择配色**：为不同阶段分配不同的 Google 颜色
4. **生成文件**：创建完整的 .drawio.svg 文件

用户需求: $ARGUMENTS
