
# FlutterModuleRn.podspec

require './ios/Podspecs/common'

Pod::Spec.new do |s|
  setCommonProps(s)
  s.name         = "idmeta-react-native"
  s.description  = <<-DESC
                  idmeta-react-native
                   DESC
  s.source_files = "ios-rn/**/*.{h,c,cc,cpp,m,mm,swift}"

  s.dependency "React-Core"
  s.dependency "Flutter"
  s.dependency "FlutterModuleFrameworks-Debug"
  s.dependency "FlutterModuleFrameworks-Release"
end


