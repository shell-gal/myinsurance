package com.cq.myinsurance.utils;

import java.util.List;

public class APIRequest implements java.io.Serializable {
	public APIRequest() {
	
	}

	// 当次请求是否成功
	private boolean isResult;
	// 当前请求响应回来的数据
	private String message;
	// 如果又单个对象数据的返回
	private Object singerData;
	// 如果有多个对象的数据返回
	private List<Object> datas;
	
	public List<Object> getDatas() {
		return datas;
	}
	public void setDatas(List<Object> datas) {
		this.datas = datas;
	}
	public boolean isResult() {
		return isResult;
	}
	public void setResult(boolean isResult) {
		this.isResult = isResult;
	}
	public String getMessage() {
		return message;
	}
	public void setMessage(String message) {
		this.message = message;
	}
	public Object getSingerData() {
		return singerData;
	}
	public void setSingerData(Object singerData) {
		this.singerData = singerData;
	}
	@Override
	public String toString() {
		return JSONUtils.toJSON(this) ;
	}
	
}
