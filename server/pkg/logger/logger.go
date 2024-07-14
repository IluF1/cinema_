package logger

import (
	"go.uber.org/zap"
	"go.uber.org/zap/zapcore"
)

var Logger *zap.Logger

func Init() {
	config := zap.NewDevelopmentConfig()
	config.EncoderConfig.TimeKey = "timestap"
	config.EncoderConfig.EncodeTime = zapcore.ISO8601TimeEncoder
	config.EncoderConfig.StacktraceKey = ""

	var err error
	Logger, err = config.Build()
	if err != nil {
		panic(err)
	}

	defer Logger.Sync()
}
