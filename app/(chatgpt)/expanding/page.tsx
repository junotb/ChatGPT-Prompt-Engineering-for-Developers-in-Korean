const Expanding = () => {
  return (
    <div className="flex items-center justify-center w-full h-full p-6">
      <div className="w-full h-full pr-2 overflow-y-scroll">
        확장은 짧은 텍스트 조각, 예를 들어 지시 사항 집합이나 주제 목록을 가져와서 대형 언어 모델이 이를 기반으로 긴 텍스트를 생성하는 작업입니다.<br />
        이에는 아이디어 동반자로서 대형 언어 모델을 사용하는 것과 같은 훌륭한 용도가 있습니다.<br />
        그러나 이에는 스팸을 대량으로 생성하는 것과 같은 문제가 있는 사용 사례도 있음을 인정하고 싶습니다.<br />
        따라서 대형 언어 모델의 이러한 기능을 사용할 때는 책임 있는 방식으로 사용하고 사람들을 도와주는 방식으로만 사용해주시기 바랍니다.<br />
        이 비디오에서는 어떻게 언어 모델을 사용하여 일부 정보를 기반으로 개인화된 이메일을 생성할 수 있는지 예시를 살펴보겠습니다.<br />
        이 이메일은 AI 봇에서 온 것으로 자칭되며, 이는 매우 중요한 점입니다.<br />
        또한 &quot;온도&quot;라는 모델의 입력 매개변수를 사용할 것이며, 이는 모델의 응답에서 탐색과 다양성의 정도를 조절할 수 있게 해줍니다.<br />
        그럼 시작해봅시다! 시작하기 전에 일반적인 설정을 수행할 것입니다.<br />
        OpenAI Python 패키지를 설치하고 &quot;get_completion&quot;이라는 도우미 함수를 정의해주세요.<br /><br />
        이제 우리는 고객 리뷰에 대한 맞춤형 이메일 응답을 작성할 것입니다.<br />
        고객 리뷰와 감정을 고려하여 맞춤형 응답을 생성할 것입니다.<br />
        이제 우리는 언어 모델을 사용하여 고객 리뷰와 리뷰의 감정에 기반한 고객에게 맞춤형 이메일을 생성할 것입니다.<br />
        이미 추론 비디오에서 보았던 유형의 프롬프트를 사용하여 감정을 추출했으며, 이것은 블렌더에 대한 고객 리뷰입니다.<br />
        이제 우리는 감정에 기반하여 응답을 맞춤화할 것입니다.<br />
        여기에서의 지시사항은 &quot;고객 서비스 AI 어시스턴트입니다.<br />
        가치 있는 고객에게 이메일 응답을 보내는 작업을 수행합니다.<br />
        세 개의 역따옴표로 구분된 고객 이메일이 주어지면, 리뷰에 대해 고객에게 감사의 말씀을 전하도록 응답을 생성하세요.<br />
        감정이 긍정적이거나 중립적인 경우, 리뷰에 대해 감사의 말씀을 전하세요.<br />
        감정이 부정적인 경우, 사과하고 고객 서비스에 문의할 수 있도록 제안하세요.<br />
        리뷰에서 구체적인 세부사항을 사용하고, 간결하고 전문적인 어조로 이메일을 작성하고, 이메일을 &quot;AI 고객 에이전트&quot;로 서명하세요.&quot;입니다.<br />
        사용자에게 표시할 텍스트를 생성하기 위해 언어 모델을 사용할 때는 이러한 종류의 투명성을 가지고 있고 사용자에게 보이는 텍스트가 AI에 의해 생성되었음을 알려주는 것이 매우 중요합니다.<br />
        그런 다음 고객 리뷰와 리뷰 감정을 입력하겠습니다.<br />
        또한 이 부분은 필수적이지 않습니다.<br />
        왜냐하면 이 프롬프트를 사용하여 리뷰 감정을 추출하고, 그 후 단계에서 이메일을 작성할 수도 있기 때문입니다.<br />
        그러나 예를 들어 설명하기 위해 이미 리뷰에서 감정을 추출했습니다.<br />
        따라서 여기에는 고객에 대한 응답이 있습니다.<br />
        이 응답은 고객이 리뷰에서 언급한 세부사항을 다루고 있습니다.<br />
        그리고 우리가 지시한 대로, 이는 AI 고객 서비스 에이전트이므로 고객 서비스에 문의하도록 제안합니다.<br />
        다음으로, &quot;온도&quot;라는 언어 모델의 매개변수를 사용하여 모델의 응답 다양성을 변경할 것입니다.<br />
        따라서 온도를 모델의 탐색 정도 또는 무작위성 정도로 생각할 수 있습니다.<br />
        이 특정 구문 &quot;내가 가장 좋아하는 음식은&quot;에서 모델이 가장 가능성이 높은 다음 단어는 &quot;피자&quot;이고, 그 다음으로 가능성이 높은 단어는 &quot;초밥&quot;과 &quot;타코&quot;입니다.<br />
        따라서 온도가 0인 경우 모델은 항상 가장 가능성이 높은 다음 단어를 선택할 것이며, 이 경우에는 &quot;피자&quot;입니다.<br />
        더 높은 온도에서는 모델이 덜 가능성이 있는 단어 중 하나를 선택할 것이며, 더 높은 온도에서는 5%의 선택 확률만 있는 &quot;타코&quot;를 선택할 수도 있습니다.<br />
        모델이 이 최종 응답을 계속 생성함에 따라 &quot;내가 가장 좋아하는 음식은 피자이고&quot;라는 응답은 계속해서 단어를 생성함에 따라 첫 번째 응답인 &quot;내가 가장 좋아하는 음식은 타코입니다&quot;와 다를 것입니다.<br />
        따라서 모델이 계속 진행함에 따라 이 두 응답은 점점 더 다를 것입니다.<br />
        일반적으로 예측 가능한 응답이 필요한 응용 프로그램을 구축할 때는 온도 0을 사용하는 것을 권장합니다.<br />
        이 모든 비디오에서 우리는 온도 0을 사용하고 있으며, 신뢰성이 있고 예측 가능한 시스템을 구축하려는 경우 이를 사용해야 한다고 생각합니다.<br />
        더 창의적인 방식으로 모델을 사용하려면 다양한 출력을 원할 수 있으므로 더 높은 온도를 사용해야 할 수도 있습니다.<br />
        이제 방금 사용한 동일한 프롬프트를 사용하여 이메일을 생성해 보겠지만, 온도를 높여 보겠습니다.<br />
        이 비디오에서 사용한 &quot;get_completion&quot; 함수에서는 모델과 온도를 지정했지만, 기본값으로 설정했습니다.<br />
        이제 온도를 다양하게 해 보겠습니다.<br /><br />
        그래서 우리는 프롬프트를 사용하고, 그럼 온도 0.7로 시도해보겠습니다.<br />
        그리고 따라서 온도가 0인 경우, 동일한 프롬프트를 실행할 때마다 동일한 완성을 기대해야 합니다.<br />
        반면에 온도가 0.7인 경우, 매번 다른 결과를 얻게 됩니다.<br />
        그래서 여기에 우리의 이메일이 있고, 보시다시피, 이전에 우리가 받은 이메일과 다릅니다.<br />
        그리고 다시 실행해서 다시 다른 이메일을 얻는 것을 보여줍시다.<br />
        여기에 또 다른 다른 이메일이 있습니다.<br />
        그래서 저는 여러분이 온도를 직접 조절해보는 것을 추천합니다.<br />
        지금 비디오를 일시정지하고 다양한 온도로 이 프롬프트를 시도해보세요.<br />
        요약하면, 더 높은 온도에서 모델의 출력은 좀 더 무작위적입니다.<br />
        더 높은 온도에서는 어시스턴트가 좀 더 산만하지만 더 창의적일 수 있다고 생각할 수 있습니다.<br />
        다음 비디오에서는 채팅 완성 엔드포인트 형식에 대해 더 자세히 이야기하고 이 형식을 사용하여 사용자 정의 챗봇을 만드는 방법에 대해 논의할 것입니다.
      </div>
    </div>
  )
}

export default Expanding;